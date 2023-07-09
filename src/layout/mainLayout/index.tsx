import styles from './layout.module.scss'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../components/Wrapper'
import { useSelector } from 'react-redux'
import { ThemeSelector } from '../../store/theme/selectors'
import Filters from '../../components/Filters'
import { useEffect, useRef } from 'react'
import { AppState } from '../../store'
import { useDispatch } from 'react-redux'
import { filtersCloseAction } from '../../store/filters/actions'

const MainLayout = () => {
  const isOpen = useSelector((state: AppState) => state.filters.isOpen)
  const dispatch = useDispatch()
  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      dispatch(filtersCloseAction())
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { theme } = useSelector(ThemeSelector)
  return (
    <div className={`${styles.layout} ${styles[`${theme}`]}`}>
      <Wrapper>
        <Header />
        {isOpen && <Filters forwardedRef={divRef} />}
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