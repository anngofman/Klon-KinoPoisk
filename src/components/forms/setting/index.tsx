import { useForm } from 'react-hook-form';
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary';
import Input from '../../../ui/input';
import styles from './setting.module.scss'
import { getAuth, updateProfile, updatePassword, reauthenticateWithCredential, EmailAuthProvider, updateEmail } from "firebase/auth";
import { useAuth } from '../../../hooks/useAuth';
// import { useNavigate } from 'react-router-dom';

const SettingForm = () => {

  const formMethod = useForm()
  const { handleSubmit, register, formState: {errors} } = formMethod
  const { isAuth } = useAuth()
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(errors)
  // const nav = useNavigate()

  const checkCurrentPassword = (currentPassword: string, newPassword: string, confirmPassword: string, name: string, email: string) => {
    if (isAuth && auth.currentUser && name) {
      //обновление имени пользователя
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        console.log('Profile name updated!')
      }).catch((error) => {
        console.log('An error occurred')
      });
    }

    if (user?.email) {
      //функция повторной аутентификации
      if (currentPassword) {
        const credential = EmailAuthProvider.credential(user.email, currentPassword)
        reauthenticateWithCredential(user, credential)
          .then(() => {
            console.log("Current password is correct.");
            if (user && (newPassword === confirmPassword)) {
              console.log('success pass=confirm')
              //обновление пароля
              updatePassword(user, newPassword).then(() => {
                console.log('Update password successful.')
              }).catch((error) => {
                console.log('An error ocurred')
              });
            }
            if (email !== user.email) {
              //обновление email
              updateEmail(user, email)
                .then(() => {
                  // nav('/auth/signIn')
                })
            }
          })
          .catch((error) => {
            console.log("Current password is incorrect:", error);
            // Обработайте неправильный текущий пароль
          });
      } else {
        console.log('Введите пароль для подтвержения')
      }
    }
  }

  const onSubmit = (data: any) => {
    console.log(data);
    checkCurrentPassword(data.password, data.newPassword, data.confirmPassword, data.name, data.email)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        <h3>Profile</h3>
        <section className={styles.FormStyle}>
          <Input {...register('name')} type='text' placeholder='Name' label='Name' />
          <Input {...register('email')} type='email' placeholder='Email' label='Email' />
        </section>
      </div>

      {/*password*/}
      <div className={styles.form}>
        <h3>Password</h3>
        <section className={styles.FormStyle}>
          <Input {...register('password')} type='password' placeholder='Password' label='Password' />
          {/* {errors.password?.message && <p>{errors.password?.message as string}</p>} */}
          <div className={styles.newPassword}>
            <Input {...register('newPassword')} type='password' placeholder='New password' label='New password' />
            <Input {...register('confirmPassword')} type='password' placeholder='Confirm password' label='Confirm password' />
          </div>
        </section>
      </div>

      <div className={styles.btn}>
        <ButtonPrimarySecondary type='submit' text='Save' typeStyle='primary' />
        <ButtonPrimarySecondary type='button' text='Cancel' typeStyle='secondary' />
      </div>
    </form>
  )
}

export default SettingForm