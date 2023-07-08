import { useSelector } from 'react-redux'
import { selectTab } from '../../store/tabs/actions'
import Button from '../button'
import styles from './tabs.module.scss'
import { AppState } from '../../store'
import { useDispatch } from 'react-redux'
type Props = {
  tabs: string[]
}
const Tabs = ({ tabs }: Props) => {
  const selectedTab = useSelector((state: AppState) => state.tabs.selectedTab)
  const dispatch = useDispatch()
  return (
    <div className={styles.btn}>
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => dispatch(selectTab(index))}
          className={`${styles[`${selectedTab === index ? 'active' : ''}`]}`}>
          {tab}
        </Button>
      ))}
    </div>
  )
}

export default Tabs