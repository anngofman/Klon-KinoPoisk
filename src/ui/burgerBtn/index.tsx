import MenuIcon from '../../assets/icons/MenuIcon'
import Button from '../button'
import styles from './burgerBtn.module.scss'
type Props = {
  className:string
}
const BurgerBtn = ({className}:Props) => {
  return (
    <Button className={`${styles.authorized_icon} ${className}`}>
      <MenuIcon />
    </Button>
  )
}

export default BurgerBtn