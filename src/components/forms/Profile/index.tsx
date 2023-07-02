import { useForm } from 'react-hook-form'
import Input from '../../../ui/input'
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary'
import styles from './profileForm.module.scss'

const ProfileForm = () => {
  const formMethod = useForm()

  const { handleSubmit, register } = formMethod

  const onSubmit = (data: any) => {
    console.log(data);

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        <div className={styles.FormStyle}>
          <Input {...register('name')} type='text' placeholder='Name' label='Name' />
          <Input {...register('email')} type='email' placeholder='Email' label='Email' />
        </div>
      </div>
      <div className={styles.btn}>
        <ButtonPrimarySecondary type='submit' text='Save' typeStyle='primary' />
        <ButtonPrimarySecondary type='button' text='Cancel' typeStyle='secondary' />
      </div>
    </form>
  )
}

export default ProfileForm