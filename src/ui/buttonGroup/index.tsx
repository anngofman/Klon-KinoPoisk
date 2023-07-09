import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import ShareIcon from '../../assets/icons/ShareIcon'
import Button from '../button'
import styles from './btnGroup.module.scss'
type Props = {
  onClick?: () => void
}
const ButtonGroup = ({onClick}:Props) => {
  return (
    <div className={styles.btn}>
      <Button onClick={onClick }>
        <FavoritesIcon />
      </Button>
      <Button>
        <ShareIcon />
      </Button>
    </div>
  )
}

export default ButtonGroup