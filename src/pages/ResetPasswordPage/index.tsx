import ResetPasswordForm from '../../components/forms/resetPassword'
import styles from './reset.module.scss'

const ResetPasswordPage = () => {
  return (
    <div className={styles.reset}>
    <ResetPasswordForm />
  </div>
  )
}

export default ResetPasswordPage