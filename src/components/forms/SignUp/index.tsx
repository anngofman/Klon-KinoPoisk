import styles from './signUpForm.module.scss'
import Input from '../../../ui/input'
import Link from '../../../ui/link'
import {useState} from 'react'
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary'

type Props = {
  onClick: (email: string, password: string) => void
}

const SignUpForm = ({onClick}:Props) => {
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
  return (
    <form action="" className={styles.form} >
      <h2>Sign Up</h2>
      {/* <Input type='text' label='Name' name='name' placeholder='Name' /> */}
      <Input type='email' label='Email' name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Input type='password' label='Password' name='password' placeholder='Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
      {/* <Input type='password' label='Confirm password' name='passwordConform' placeholder='Confirm password' /> */}
      <ButtonPrimarySecondary text='Sign Un' typeStyle='primary' type='button' onClick={()=>onClick(email, pass)} />
      <div className={styles.signUp}>
        <p>Already have an account?  </p>
        <Link to='/auth/signIn'>
          <p> Sign In</p>
        </Link>
      </div>
    </form>
  )
}

export default SignUpForm