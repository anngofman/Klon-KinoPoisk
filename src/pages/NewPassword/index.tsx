import { useDispatch } from 'react-redux';
import NewPasswordForm from '../../components/forms/newPassword'
import styles from './reset.module.scss'
import { getAuth, confirmPasswordReset } from "firebase/auth";
import { passwordResetRequest, passwordResetSuccess } from '../../store/resetPass/actions';
import { useLocation, useNavigate } from 'react-router-dom';


const NewPasswordPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const query = new URLSearchParams(location.search)
  const oobCode: string = query.get('oobCode') as string
  const nav = '/auth/signIn'
  
  const hanleNewPass = (newPass: string) => {
    dispatch(passwordResetRequest())
    const auth = getAuth();
    confirmPasswordReset(auth, oobCode, newPass)
      .then(() => {
        dispatch(passwordResetSuccess())
        navigate(nav)
      })
      .catch(console.error)
  }

  return (
    <div className={styles.new}>
      <NewPasswordForm onClick={hanleNewPass} />
    </div>
  )
}

export default NewPasswordPage