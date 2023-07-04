import { useSelector } from 'react-redux'
import CopyRight from '../../components/CopyRight'
import Logo from '../../components/Logo'
import Wrapper from '../../components/Wrapper'
import styles from './authLayout.module.scss'
import { Outlet } from 'react-router-dom'
import { ThemeSelector } from '../../store/theme/selectors'

const AuthLayout = () => {
  const { theme } = useSelector(ThemeSelector)
  return (
    <>
      <div className={`${styles.layout} ${styles[`${theme}`]}`}>
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