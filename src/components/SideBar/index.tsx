import styles from './sideBar.module.scss'
import HomeIcon from '../../assets/icons/HomeIcon'
import TrendsIcon from '../../assets/icons/TrendsIcon'
import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import SerringIcon from '../../assets/icons/SerringIcon'
import Link from '../../ui/link'

type Props = {
  className: string
}

const SideBar = ({ className }: Props) => {

  return (
    <div className={`${styles.sideBar} ${className}`}>
      <nav>
        <Link to='/'  >
          <HomeIcon />
          Home
        </Link>
        <Link to='/'>
          <TrendsIcon />
          Trends
        </Link>
        <Link to='/' >
          <FavoritesIcon />
          Favorites
        </Link>
        <Link to='/' >
          <SerringIcon />
          Setting
        </Link>
      </nav>
      <div className={styles.copyright}>
        <p>© All Rights Reserved</p>
      </div>
    </div>
  )
}

export default SideBar