import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import { useEffect, useState } from 'react'
import { setDefaultPage, setInitialState } from '../../store/movies/actions'
import Loader from '../../components/Loader'
import { isLoadingSelector } from '../../store/loader/selectors'
import styles from './moviesPage.module.scss'
import { loadSearchMovies } from '../../store/search/actions'
import { useSearchParams } from 'react-router-dom'
import SearchMovies from '../../components/SearchMovies'

const SearchPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: AppState) => state.search.search);
  const load = useSelector(isLoadingSelector)
  const [page, setPage] = useState(1)
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  const loadMorePosts = () => {
    setPage((prevState) => prevState + 1)
  }

  useEffect(() => {
    dispatch(setDefaultPage());
    return () => {
      dispatch(setInitialState()); // Вызов экшна для сброса состояния при размонтировании компонента
    };
  }, [dispatch]);
  console.log(params)
  useEffect(() => {
    let limit = 10;
    if (params.query) {
      dispatch(loadSearchMovies(limit, page, params.query));
      console.log(params.query);
    }

  }, [page, dispatch, params.query]);

  if (!movies.length) {
    return (
      <div className={styles.promo}>
        <h3>Здесь могла быть ваша реклама</h3>
        <p>/ / Но вы не заплатили мне денег</p>
        <p>Введите ваш запрос</p>
      </div>
    )
  }

  return (
    <div className={styles.moviesPage}>
      <SearchMovies movies={movies} />
      <Loader isLoading={load} onClick={loadMorePosts} />
    </div>
  );
}

export default SearchPage