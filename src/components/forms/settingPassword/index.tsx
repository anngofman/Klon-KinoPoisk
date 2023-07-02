import { useForm } from 'react-hook-form'
import Input from '../../../ui/input'
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary'
import styles from './password.module.scss'

const PasswordSettingForm = () => {
  const formMethod = useForm()

  const { handleSubmit, register } = formMethod

  const onSubmit = (data: any) => {
    console.log(data);

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        <div className={styles.input}>
          <Input {...register('password')} type='password' placeholder='Password' label='Password' />
          <div className={styles.newPassword}>
            <Input {...register('newPassword')} type='password' placeholder='New password' label='New password' />
            <Input {...register('confirmPassword')} type='password' placeholder='Confirm password' label='Confirm password' />
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <ButtonPrimarySecondary type='submit' text='Save' typeStyle='primary' />
        <ButtonPrimarySecondary type='button' text='Cancel' typeStyle='secondary' />
      </div>
    </form>
  )
}

export default PasswordSettingForm