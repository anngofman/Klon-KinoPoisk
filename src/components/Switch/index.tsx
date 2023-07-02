import { useDispatch } from 'react-redux'
import styles from './switch.module.scss'
import { useState } from 'react'
import { themeDarkAction, themeLightAction } from '../../store/theme/actions'

const Switch = () => {
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()
  const handleOnClick = () => {
    setToggle(!toggle)
    !toggle
      ? dispatch(themeLightAction())
      : dispatch(themeDarkAction())
  }
  return (
    <label className={styles.switch} >
      <input type='checkbox' />
      <span className={`${styles.slider} ${styles[toggle ? '' : 'dark']}`} onClick={() => handleOnClick()}>
      </span>
    </label>
  )
}

export default Switch