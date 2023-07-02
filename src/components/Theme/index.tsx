import Switch from '../Switch'
import styles from './theme.module.scss'

const Theme = () => {
  return (
    <section className={styles.FormStyle}>
      <div className={styles.textBlock}>
        <h5>
          Dark
        </h5>
        <p>
          Use dark theme
        </p>
      </div>
      <div>
        <Switch />
      </div>
    </section>
  )
}

export default Theme