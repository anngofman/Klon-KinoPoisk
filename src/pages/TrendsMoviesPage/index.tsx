import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import { loadTrendMovies, setDefaultPage, setInitialState } from '../../store/movies/actions'
import { useSelector } from 'react-redux'
import Movies from '../../components/Movies'
import Loader from '../../components/Loader'
import { isLoadingSelector } from '../../store/loader/selectors'
import styles from './trendPage.module.scss'

const TrendsMoviesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1)
  const load = useSelector(isLoadingSelector)
  const loadMorePosts = () => {
    setPage((prevState) => prevState + 1)
  }
  const trendsMovies = useSelector((state: AppState) => state.movies.trend);

  useEffect(() => {
    dispatch(setDefaultPage());
    return () => {
      dispatch(setInitialState()); // Вызов экшна для сброса состояния при размонтировании компонента
    };
  }, [dispatch]);

  useEffect(() => {
    let limit = 10;
    dispatch(loadTrendMovies(limit, page));
  }, [page, dispatch]);

  return (<div className={styles.moviesPage}>
    <Movies movies={trendsMovies} isTrends />
    <Loader isLoading={load} onClick={loadMorePosts} />
  </div>
  );
}

export default TrendsMoviesPage;