import styles from './setting.module.scss'
import ProfileForm from '../../components/forms/Profile'
import PasswordSettingForm from '../../components/forms/settingPassword'
import Theme from '../../components/Theme'

const SettingPage = () => {
  return (
    <div className={styles.settingPage}>
      <h3>Profile</h3>
      <ProfileForm />
      <h3>Password</h3>
      <PasswordSettingForm />
      <h3>Color mode</h3>
      <Theme />
    </div>
  )
}

export default SettingPage