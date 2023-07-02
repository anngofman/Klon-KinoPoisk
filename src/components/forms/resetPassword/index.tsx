import styles from './resetPasswordForm.module.scss'
import Input from '../../../ui/input'
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary'
import { useNavigate } from 'react-router-dom'
const ResetPasswordForm = () => {
const nav = useNavigate()
  return (
    <form action="" className={styles.form} >
      <h2>Reset password</h2>
      <Input type='email' label='Email' names='email'/>
      <ButtonPrimarySecondary text='Reset' typeStyle='primary' type='submit' onClick={()=> nav('/auth/newPassword')} />
    </form>
  )
}

export default ResetPasswordForm