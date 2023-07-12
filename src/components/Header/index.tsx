import styles from './header.module.scss'
import SearchInput from '../SearchInput'
import Logo from "../Logo"
import AboutUser from '../AboutUser'
import BurgerBtn from '../../ui/burgerBtn'

const Header = () => {


  return (
    <header className={styles.header}>
      <Logo className={styles.logo}/>
      <SearchInput className={styles.search}/>
      <BurgerBtn className={styles.burger}/>
      <AboutUser/>
    </header>
  )
}

export default Header