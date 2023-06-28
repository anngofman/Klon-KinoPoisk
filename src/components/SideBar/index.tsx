import { NavLink } from 'react-router-dom'
import styles from './sideBar.module.scss'
import HomeIcon from '../../assets/icons/HomeIcon'
import TrendsIcon from '../../assets/icons/TrendsIcon'
import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import SerringIcon from '../../assets/icons/SerringIcon'

const SideBar = () => {

  return (
    <div className={styles.sideBar}>
      <nav>
        <NavLink to='/'>
          <HomeIcon />
          Home
        </NavLink>
        <NavLink to='/'>
          <TrendsIcon />
          Trends
        </NavLink>
        <NavLink to='/'>
          <FavoritesIcon />
          Favorites
        </NavLink>
        <NavLink to='/'>
          <SerringIcon />
          Setting
        </NavLink>
      </nav>
      <div className={styles.copyright}>
        <p>© All Rights Reserved</p>
      </div>
    </div>
  )
}

export default SideBar