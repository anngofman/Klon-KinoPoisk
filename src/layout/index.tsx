import styles from './layout.module.scss'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import Wrapper from '../components/Wrapper'


const Layout = () => {
  return (
   
      <div className={styles.layout}>
         <Wrapper>
        <Header />
        <div className={styles.content}>
          <SideBar />
          <Outlet />
        </div>
        </Wrapper>
      </div>

  )
}

export default Layout