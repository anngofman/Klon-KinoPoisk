import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import ShareIcon from '../../assets/icons/ShareIcon'
import { useAuth } from '../../hooks/useAuth'
import Button from '../button'
import styles from './btnGroup.module.scss'
type Props = {
  onClick?: () => void
  fav?:boolean
}
const ButtonGroup = ({onClick, fav}:Props) => {
  const {isAuth} = useAuth()
  return (
    <div className={styles.btn}>
      <Button onClick={onClick } isDisabled={!isAuth} className={styles[`${fav?'fav' :''}`]}>
        <FavoritesIcon />
      </Button>
      <Button>
        <ShareIcon />
      </Button>
    </div>
  )
}

export default ButtonGroup