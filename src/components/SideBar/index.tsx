import { NavLink } from 'react-router-dom'
import styles from './sideBar.module.scss'
import HomeIcon from '../../assets/icons/HomeIcon'
import TrendsIcon from '../../assets/icons/TrendsIcon'
import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import SerringIcon from '../../assets/icons/SerringIcon'

type Props = {
  className: string
}

const SideBar = ({ className }: Props) => {

  return (
    <div className={`${styles.sideBar} ${className}`}>
      <nav>
        <NavLink to='/' className={styles.navLink}>
          <HomeIcon />
          Home
        </NavLink>
        <NavLink to='/' className={styles.navLink}>
          <TrendsIcon />
          Trends
        </NavLink>
        <NavLink to='/' className={styles.navLink}>
          <FavoritesIcon />
          Favorites
        </NavLink>
        <NavLink to='/' className={styles.navLink}>
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