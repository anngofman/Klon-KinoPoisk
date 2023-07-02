import FavoritesIcon from '../../assets/icons/FavoritesIcon'
import ShareIcon from '../../assets/icons/ShareIcon'
import Button from '../button'
import styles from './btnGroup.module.scss'

const ButtonGroup = () => {
  return (
    <div className={styles.btn}>
      <Button>
        <FavoritesIcon/>
      </Button>
      <Button>
        <ShareIcon/>
      </Button>
    </div>
  )
}

export default ButtonGroup