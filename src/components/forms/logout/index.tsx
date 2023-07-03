import styles from './logoutForm.module.scss'
import ButtonPrimarySecondary from '../../../ui/button/buttonPrimaryorSeondary'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../../store/auth/actions'

const LogoutForm = () => {
const nav = useNavigate()
const dispatch = useDispatch()
const hadleClick = () => {
  dispatch(logoutAction())
  nav('/',{replace:true})
}
  return (
    <form action="" className={styles.form} >
      <h2>Log out</h2>
      <div>Вы действительно хотите выйти из аккаунта?</div>
      <ButtonPrimarySecondary text='Exit' typeStyle='primary' type='submit' onClick={hadleClick} />
    </form>
  )
}

export default LogoutForm