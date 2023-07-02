import { useDispatch } from 'react-redux'
import styles from './moviesPage.module.scss'
import { useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import { useEffect } from 'react'
import { loadMovies, loadTrendMovies, setDefaultPage, setIncPage } from '../../store/movies/actions'
import Movie from '../../components/Movie'
import ButtonPrimarySecondary from '../../ui/button/buttonPrimaryorSeondary'
import { useLocation } from 'react-router-dom'

type Props = {
  isTrends?: boolean
}

const MoviesPage = ({ isTrends }: Props) => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>()
  const page = useSelector((state: AppState) => state.movies.page)
  let moviesAll = useSelector((state: AppState) => state.movies)
  let movies = []
  isTrends
    ? movies = moviesAll.trend : movies = moviesAll.docs

  useEffect(() => {
    
    let limit = 10
    isTrends
      ? dispatch(loadTrendMovies(limit, page))
      : dispatch(loadMovies(limit, page))

  }, [page, dispatch, isTrends])

  useEffect(() => {
    return () => {
      dispatch(setDefaultPage())
    }
  }, [dispatch, location])

  const loadMorePosts = () => {
    dispatch(setIncPage())
  }

  if (!movies) {
    return null
  }

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
      {/* {!isTrends && <ButtonPrimarySecondary text='Add movies' type='button' typeStyle='primary' onClick={loadMorePosts}></ButtonPrimarySecondary>} */}
      <ButtonPrimarySecondary text='Add movies' type='button' typeStyle='primary' onClick={loadMorePosts}></ButtonPrimarySecondary>
    </div>
  )
}

export default MoviesPage