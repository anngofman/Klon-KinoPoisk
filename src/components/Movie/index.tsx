import { NameType, PosterType, RatingType } from '../../api/shaped/types'
import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import TrendsIcon from '../../assets/icons/TrendsIcon'
import styles from './movie.module.scss'

type Props = {
  id: number
  name: string
  poster: PosterType
  genres: NameType[]
  rating: RatingType
  favorites: boolean
  isTrends?: boolean
}

const Movie = ({ id, name, genres, poster, rating, favorites, isTrends }: Props) => {
  console.log(genres)
  return (
    <div className={styles.movie}>
      <div className={styles.imageBlock}>
        <img src={poster.url} alt='movie' />
        <div className={styles.imageConnect}>
          {isTrends
            ? <span className={styles.trend}>
              <TrendsIcon />{rating.kp}
            </span>
            : <span className={styles.rating}>{rating.kp}</span>
          }
          <span className={styles.fav}>
            <FavoritesIcon />
          </span>
        </div>
      </div>
      <div className={styles.textBlock}>
        <h3>{name}</h3>
        <h6>
          {genres.map((val, index) => {
            if (index > 2) {
              return null
            }
            return val.name + ' * '
          })}
        </h6>
      </div>
    </div>
  )
}

export default Movie