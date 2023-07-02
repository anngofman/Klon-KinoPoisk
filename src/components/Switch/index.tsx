import styles from './switch.module.scss'
import { useState } from 'react'

const Switch = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <label className={styles.switch} >
      <input type='checkbox' />
      <span className={`${styles.slider} ${styles[!toggle ? 'dark' : '']}`} onClick={() => setToggle(!toggle)}>
      </span>
    </label>
  )
}

export default Switch