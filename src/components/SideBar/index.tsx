import styles from './sideBar.module.scss'
import HomeIcon from '../../assets/icons/HomeIcon'
import TrendsIcon from '../../assets/icons/TrendsIcon'
import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import SerringIcon from '../../assets/icons/SerringIcon'
import Link from '../../ui/link'
import CopyRight from '../CopyRight'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'

type Props = {
  className: string
}

const SideBar = ({ className }: Props) => {
  const fav = useSelector((state: AppState) => state.favorites)
  return (
    <div className={`${styles.sideBar} ${className}`}>
      <nav>
        <Link to='/movies' onClick={() => console.log(fav)} >
          <HomeIcon />
          Home
        </Link>
        <Link to='/trends' >
          <TrendsIcon />
          Trends
        </Link>
        <Link to='/favorites' >
          <FavoritesIcon />
          Favorites
        </Link>
        <Link to='/setting' >
          <SerringIcon />
          Setting
        </Link>
      </nav>
      <CopyRight />
    </div>
  )
}

export default SideBar