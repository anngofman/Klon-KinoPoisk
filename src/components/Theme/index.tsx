import Switch from '../Switch'
import styles from './theme.module.scss'

const Theme = () => {
  return (
    <div className={styles.theme}>
      <div className={styles.textBlock}>
        <h5>
          Dark
        </h5>
        <p>
          Use dark theme
        </p>
      </div>
      <div>
        <Switch/>
      </div>
    </div>
  )
}

export default Theme