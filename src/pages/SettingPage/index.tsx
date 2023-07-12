import styles from './setting.module.scss'
import Theme from '../../components/Theme'
import SettingForm from '../../components/forms/setting'

const SettingPage = () => {
  return (
    <div className={styles.settingPage}>
      <SettingForm/>
      <h3>Color mode</h3>
      <Theme />
    </div>
  )
}

export default SettingPage