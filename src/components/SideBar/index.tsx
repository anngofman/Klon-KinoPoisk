import styles from './sideBar.module.scss'
import HomeIcon from '../../assets/icons/HomeIcon'
import TrendsIcon from '../../assets/icons/TrendsIcon'
import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import SerringIcon from '../../assets/icons/SerringIcon'
import Link from '../../ui/link'
import CopyRight from '../CopyRight'
// import { useDispatch } from 'react-redux'
// import { setDefaultPage } from '../../store/movies/actions'

type Props = {
  className: string
}

const SideBar = ({ className }: Props) => {
  // const dispatch = useDispatch()
// const handle = () =>{
//   dispatch(setDefaultPage())
// }
  return (
    <div className={`${styles.sideBar} ${className}`}>
      <nav>
        <Link to='/movies'  >
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