import SignInForm from '../../components/forms/SignIn'
import styles from './signIn.module.scss'

const SignInPage = () => {
  return (
    <div className={styles.signInPage}>
      <SignInForm />
    </div>
  )
}

export default SignInPage