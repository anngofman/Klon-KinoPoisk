import { SearchMovieType } from "../../store/search/types"
import SearchMovie from "../SearchMovie"
import styles from './moviesPage.module.scss'

type Props = {
  movies: SearchMovieType[]
  isTrends?: boolean
}

const SearchMovies = ({ movies, isTrends }: Props) => {
  return (
    <div className={styles.movies}>
      {movies.map((film, index) => {
        const { id, name, genres, poster, rating, favorites } = { ...film }
        return (<SearchMovie
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

export default SearchMovies