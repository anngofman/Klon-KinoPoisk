import styles from './signUpForm.module.scss'
import Input from '../../../ui/input'
import Link from '../../../ui/link'
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary'
const SignInForm = () => {


 


  return (
    <form action="" className={styles.form} >
      <h2>Sign Up</h2>
      <Input type='text' label='Name' />
      <Input type='email' label='Email' />
      <Input type='password' label='Password' />
      <Input type='password' label='Confirm password' />
    
      <ButtonPrimarySecondary text='Sign Un' typeStyle='primary' type='submit' />
      <div className={styles.signUp}>
        <p>Already have an account?  </p>
        <Link to='/auth/signIn'>
          <p> Sign In</p>
        </Link>
      </div>
    </form>
  )
}

export default SignInForm