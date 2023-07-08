import styles from './resetPasswordForm.module.scss'
import Input from '../../../ui/input'
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary'
import {useState} from 'react'

type Props = {
  onClick: (newPass:string)=>void
}

const NewPasswordForm = ({onClick}:Props) => {

  const [newPass, setNewPass] = useState('')

  return (
    <section  className={styles.form} >
      <h2>New password</h2>
      <Input type='password' label='Password' name='password' placeholder='New password' value={newPass} onChange={(e)=>setNewPass(e.target.value)}/>
      {/* <Input type='password' label='Confirm password' name='confirmPassword' placeholder='Confirm password'/> */}
      <ButtonPrimarySecondary text='Reset' typeStyle='primary' type='submit' onClick={()=>onClick(newPass)} />
    </section>
  )
}

export default NewPasswordForm