import NewPasswordForm from '../../components/forms/newPassword'
import styles from './reset.module.scss'

const NewPasswordPage = () => {
  return (
    <div className={styles.new}>
      <NewPasswordForm />
    </div>
  )
}

export default NewPasswordPage