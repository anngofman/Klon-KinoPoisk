import CopyRight from '../../components/CopyRight'
import Logo from '../../components/Logo'
import Wrapper from '../../components/Wrapper'
import styles from './authLayout.module.scss'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
      <div className={`${styles.layout}`}>
        <Wrapper>
          <Logo />
          <div className={styles.info}>
            <div className={styles.content} >
              <Outlet />
            </div>
            <CopyRight />
          </div>
        </Wrapper>
      </div>
    </>


  )
}

export default AuthLayout