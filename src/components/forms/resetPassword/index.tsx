import styles from './resetPasswordForm.module.scss'
import Input from '../../../ui/input'
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../store'

type Props = {
  onClick: (email: string) => void
}

const ResetPasswordForm = ({ onClick }: Props) => {
  const isSuccess = useSelector((state: AppState) => state.resetPass.isSuccess)
  const isLoading = useSelector((state: AppState) => state.resetPass.isLoading)


  const [email, setEmail] = useState('')
  return (
    <div className={styles.form}>
      <div><h2>Reset password </h2>
        {isSuccess
          ? <div className={styles.confirmReset}>
            You will receive an email with a link to reset your password!
          </div>
          : ''}
      </div>
      <Input type='email' label='Email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <ButtonPrimarySecondary text='Reset' typeStyle='primary' type='submit' onClick={() => onClick(email)} disabled={isLoading} />
    </div>
  )
}

export default ResetPasswordForm