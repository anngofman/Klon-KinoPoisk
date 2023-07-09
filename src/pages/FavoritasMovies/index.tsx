import styles from './favPage.module.scss'
import { useAuth } from '../../hooks/useAuth'
import image from '../../assets/favoritesEmpty.png'
import { useState, useEffect } from 'react'
import { localStorageKey } from '../../localStorage'
import Movies from '../../components/Movies'
import { TypeMovies } from '../../api/shaped/types'


const FavoritesPage = () => {
  const { isAuth } = useAuth()

  const [favorites, setFavorites] = useState([] as TypeMovies[]);
  console.log(favorites)
  useEffect(() => {
    const serializedState = localStorage.getItem(localStorageKey);
    if (serializedState) {
      const parsedState = JSON.parse(serializedState);
      const favoritesFromLocalStorage = parsedState;
      setFavorites(favoritesFromLocalStorage);
      console.log(favoritesFromLocalStorage.favorites)
    }
  }, []);

  return (
    <div className={styles.favPage}>
      {isAuth
        ? <div className={styles.favoritesMovie}>
          {favorites 
          ? <Movies movies={favorites} /> 
          : <div className={styles.emptyFavorites}>
            <img src={image} alt='emptyMovie' />
            <h3>Empty state text</h3>
          </div>}
          {/* <Movies movies={favorites} /> */}
        </div>
        : <div className={styles.emptyFavorites}>
          <img src={image} alt='emptyMovie' />
          <h3>Empty state text</h3>
        </div>
      }
    </div>
  )
}

export default FavoritesPage