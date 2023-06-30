import styles from './sideBar.module.scss'
import HomeIcon from '../../assets/icons/HomeIcon'
import TrendsIcon from '../../assets/icons/TrendsIcon'
import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import SerringIcon from '../../assets/icons/SerringIcon'
import Link from '../../ui/link'
import CopyRight from '../CopyRight'

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
        <Link to='/trends'>
          <TrendsIcon />
          Top 10
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
      <CopyRight />
    </div>
  )
}

export default SideBar