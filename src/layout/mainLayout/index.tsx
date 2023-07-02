import styles from './layout.module.scss'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../components/Wrapper'
import { useSelector } from 'react-redux'
import { ThemeSelector } from '../../store/theme/selectors'

const MainLayout = () => {
  const { theme } = useSelector(ThemeSelector)
  return (
    <div className={`${styles.layout} ${styles[`${theme}`]}`}>
      <Wrapper>
        <Header />
        <div className={styles.content}>
          <SideBar className={styles.sideBar} />
          <div className={styles.outlet}>
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default MainLayout