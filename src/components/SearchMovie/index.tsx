import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import TrendsIcon from '../../assets/icons/TrendsIcon'
import Link from '../../ui/link'
import styles from './searchMovie.module.scss'

type Props = {
  id: number
  name: string
  poster: string
  genres?: string[]
  rating?: number
  favorites?: boolean
  isTrends?: boolean
}

const SearchMovie = ({ id, name, genres, poster, rating, favorites, isTrends }: Props) => {
  let ratingKp = ''
  if (rating && rating < 5) {
    ratingKp = 'orange'
  }
  else if (rating && (rating > 5 && rating < 7)) {
    ratingKp = 'yellow'
  } else { ratingKp = 'green' }


  return (
    <Link to={`/movie/${id}`} className={styles.movie}>
      <div className={styles.imageBlock}>

        <img src={poster} alt='movie' />
        {rating ?
          <div className={styles.imageConnect}>

            {isTrends
              ? <span className={styles.trend}>
                <TrendsIcon />{rating}
              </span>
              : <span className={`${styles.rating}
              ${styles[ratingKp]}`}>{rating}</span>
            }
            <span className={styles.fav}>
              <FavoritesIcon />
            </span>
          </div>
          : ''
        }

      </div>
      <div className={styles.textBlock}>
        <h4>{name}</h4>
        <h6>
          {genres?.map((val, index) => {
            if (index > 2) {
              return null
            }
            return val
          }).join('•')}
        </h6>
      </div>
    </Link>

  )
}

export default SearchMovie