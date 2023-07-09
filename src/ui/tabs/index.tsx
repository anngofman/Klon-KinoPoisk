import { useSelector } from 'react-redux'
import { selectTab } from '../../store/tabs/actions'
import Button from '../button'
import styles from './tabs.module.scss'
import { AppState } from '../../store'
import { useDispatch } from 'react-redux'
import { setDefaultPage } from '../../store/movies/actions'

type Props = {
  tabs: string[]
}
const Tabs = ({ tabs }: Props) => {
  const handle = (tab: string) => {
    dispatch(selectTab(tab))
    dispatch(setDefaultPage())
  }
  const selectedTab = useSelector((state: AppState) => state.tabs.selectedTab)
  const dispatch = useDispatch()
  return (
    <div className={styles.btn}>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => handle(tab)}
          className={`${styles[`${selectedTab === tab ? 'active' : ''}`]}`}>
          {tab}
        </Button>
      ))}
    </div>
  )
}

export default Tabs