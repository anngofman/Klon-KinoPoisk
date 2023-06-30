import { ResponseTypeMovies } from '../../api/shaped/types'
import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import TrendsIcon from '../../assets/icons/TrendsIcon'
import styles from './post.module.scss'



const Movie = ({id, name, genres, poster, rating, favorites}:ResponseTypeMovies) => {
  return (
    <div className={styles.post}>
      <div className={styles.imageBlock}>
        <img src={poster.url} alt='post' />
        <div className={styles.imageConnect}>
          <span className={styles.rating}>{rating.kp}</span>
          <span className={styles.trend}>
            <TrendsIcon />{rating.kp}</span>
          <span className={styles.fav}>
            <FavoritesIcon />
          </span>
        </div>
      </div>
      <div className={styles.textBlock}>
        <h3>{name}</h3>
        <h6>
          {genres.map(value=> {
            return (value.name)
          })}
        </h6>
      </div>
    </div>
  )
}

export default Movie