import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import { useEffect, useState } from 'react'
import { loadMovies, setDefaultPage, setInitialState } from '../../store/movies/actions'
import Movies from '../../components/Movies'
import Loader from '../../components/Loader'
import { isLoadingSelector } from '../../store/loader/selectors'
import styles from './moviesPage.module.scss'

const MoviesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: AppState) => state.movies.docs);
  const load = useSelector(isLoadingSelector)
  const [page, setPage] = useState(1)
  const loadMorePosts = () => {
    setPage((prevState) => prevState + 1)
  }

  useEffect(() => {
    dispatch(setDefaultPage());
    return () => {
      dispatch(setInitialState()); // Вызов экшна для сброса состояния при размонтировании компонента
    };
  }, [dispatch]);

  useEffect(() => {
    let limit = 10;
    dispatch(loadMovies(limit, page));
  }, [page, dispatch]);

  return (<div className={styles.moviesPage}>
    <Movies movies={movies} />
    <Loader isLoading={load} onClick={loadMorePosts} />
  </div>
  );
}

export default MoviesPage