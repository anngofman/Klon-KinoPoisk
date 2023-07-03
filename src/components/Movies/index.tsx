import { TypeMovies } from "../../api/shaped/types"
import Movie from "../Movie"
import styles from './moviesPage.module.scss'

type Props = {
  movies: TypeMovies[]
  isTrends?: boolean
}

const Movies = ({ movies, isTrends }: Props) => {
  return (
    <div className={styles.movies}>
      {movies.map((film, index) => {
        const { id, name, genres, poster, rating, favorites } = { ...film }
        return (<Movie
          key={index}
          id={id}
          name={name}
          genres={genres}
          poster={poster}
          rating={rating}
          favorites={favorites}
          isTrends={isTrends!}
        />)
      })}
    </div>
  )
}

export default Movies