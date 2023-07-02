import { useDispatch } from 'react-redux'
import styles from './singleMovie.module.scss'
import { AppDispatch, AppState } from '../../store'
import { useSelector } from 'react-redux'
import { ReactNode, useEffect } from 'react'
import { loadSingleMovie } from '../../store/singleMovie/actions'
import { useParams } from 'react-router-dom'
import ButtonGroup from '../../ui/buttonGroup'
import IMDbIcon from '../../assets/icons/IMDbIcon'
import TableInfoMovie from '../TableInfoMovie'

type Props = {
  children: ReactNode
}

const SingleMovie = ({ children }: Props) => {

  const { movieId } = useParams()
  const id = Number(movieId)

  const dispatch = useDispatch<AppDispatch>()
  const movie = useSelector((state: AppState) => state.singleMovie.movie)

  useEffect(() => {
    dispatch(loadSingleMovie(id))
  }, [id, dispatch])

  let ratingKp = ''
  if (movie && movie.rating.kp < 5) {
    ratingKp = 'orange'
  } else if (movie && (movie.rating.kp > 5 && movie.rating.kp < 7)) {
    ratingKp = 'yellow'
  } else {
    ratingKp = 'green'
  }

  return (
    <>
      <div className={styles.poster}>
        <div className={styles.img}>
          <img src={movie?.poster.url} alt='poster' />
        </div>
        <ButtonGroup />
      </div>
      <div className={styles.wrappText}>
        <h6>
          {movie?.genres.map((val, index) => {
            if (index > 2) {
              return null
            }
            return val.name
          }).join(', ')}
        </h6>
        <h3>{movie?.name}</h3>
        <div className={styles.rating}>
          <span className={`${styles.ratingKp} 
          ${styles[ratingKp]}
          `}>
            {movie?.rating.kp}
          </span>
          <span className={styles.ratingIMDb}>
            <IMDbIcon />{movie?.rating.imdb}
          </span>
          <span className={styles.lengthMovie}>
            {movie?.movieLength} min
          </span>
        </div>
        <div className={styles.description}>
          <h4> {movie?.description}</h4>
        </div>
        <TableInfoMovie />
        {children}
      </div>
    </>
  )
}

export default SingleMovie