import LogoutForm from '../../components/forms/logout'
import styles from './logout.module.scss'

const LogoutPage = () => {
  return (
    <div className={styles.logout}>
      <LogoutForm />
    </div>
  )
}

export default LogoutPage