import styles from './signInForm.module.scss'
import Input from '../../../ui/input'
import Link from '../../../ui/link'
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary'
import { useNavigate } from 'react-router-dom'
const SignInForm = () => {
  const nav = useNavigate()
  return (
    <form action="" className={styles.form} >
      <h2>Sign In</h2>
      <Input type='email' label='Email' />
      <Input type='password' label='Password' />
      <Link to='/auth/resetPassword'>
        <p>Forgot password?</p>
      </Link>
      <ButtonPrimarySecondary text='Sign In' typeStyle='primary' type='submit' onClick={() => nav('/')} />
      <div className={styles.signUp}>
        <p>Don’t have an account? </p>
        <Link to='/auth/signUp'>
          <p> Sign Up</p>
        </Link>
      </div>
    </form>
  )
}

export default SignInForm