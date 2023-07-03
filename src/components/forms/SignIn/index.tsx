import styles from './signInForm.module.scss'
import Input from '../../../ui/input'
import Link from '../../../ui/link'
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary'
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

type Props = {
  onClick: (email: string, password: string) => void
}

const SignInForm = ({ onClick }: Props) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  // const nav = useNavigate()
  return (
    <form className={styles.form} >
      <h2>Sign In</h2>
      <Input type='email' label='Email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type='password' label='Password' name='password' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
      <Link to='/auth/resetPassword'>
        <p>Forgot password?</p>
      </Link>
      <ButtonPrimarySecondary text='Sign In' typeStyle='primary' type='button' onClick={() => onClick(email, pass)} />
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