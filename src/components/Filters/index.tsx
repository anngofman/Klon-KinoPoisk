import { useState } from 'react'
import Button from '../../ui/button'
import CloseIcon from '../../assets/icons/CloseIcon'
import Tabs from '../../ui/tabs'
import styles from './filters.module.scss'
import Input from '../../ui/input'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import { useDispatch } from 'react-redux'
import { filtersCloseAction } from '../../store/filters/actions'

const Filters = () => {
  const tabs = ['Rating', 'Years']
  // const [open, setOpen] = useState(true)
  const isOpen = useSelector((state: AppState) => state.filters.isOpen)
  const dispatch = useDispatch()
  return (
    <div className={`${styles.filters} ${styles[`${!isOpen ? 'close' : ''}`]}`}>
      <div className={`${styles.flex} ${styles.title}`}>
        <h3>
          Filters
        </h3>
        <Button onClick={() => dispatch(filtersCloseAction())}>
          <CloseIcon />
        </Button>
      </div>
      {/* <div className={styles.flex}> */}
        Sort by
      <Tabs tabs={tabs}/>
      {/* </div> */}
      <div className={styles.filtersSetting}>
        <div>
          <Input type='text' label='Full or short movie name' placeholder='Your text'/>
        </div>
        <div>
          <Input type='text' label='Genre' />
        </div>
        <div className={styles.flex}>
          <Input type='number' label='Years' placeholder='From'/>
          <Input type='number' label='' placeholder='To'/>
        </div>
        <div className={styles.flex}>
          <Input type='number' label='Rating' placeholder='From' />
          <Input type='number' label='' placeholder='To'/>
        </div>
        <div>
          <Input type='select' label='Country' placeholder='Select country'/>
        </div>
      </div>
    </div>
  )
}

export default Filters