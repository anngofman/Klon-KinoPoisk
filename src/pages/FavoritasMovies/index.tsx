import styles from './favPage.module.scss'
import { useAuth } from '../../hooks/useAuth'
import image from '../../assets/favoritesEmpty.png'
const FavoritesPage = () => {
  const { isAuth } = useAuth()
  return (
    <div className={styles.favPage}>
      {isAuth
        ? <div className={styles.favoritesMovie}>фав муви</div>
        : <div className={styles.emptyFavorites}>
          <img src={image} alt='emptyMovie' />
          <h3>Empty state text</h3>
        </div>
      }
    </div>
  )
}

export default FavoritesPage