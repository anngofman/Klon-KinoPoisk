// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ResetPasswordForm from '../../components/forms/resetPassword'
import styles from './reset.module.scss'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { passwordForgotRequest, passwordForgotSuccess } from '../../store/forgotPass/actions';


const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const handleResetPass = (email: string) => {
    dispatch(passwordForgotRequest());

    const actionCodeSettings = {
      url: "http://localhost:3000/auth/signIn", // Укажите новый URL перенаправления
    };

    const auth = getAuth();
    sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then((res) => {
        dispatch(passwordForgotSuccess());
      })
      .catch(console.error)
  }

  return (

    <div className={styles.reset}>

      <ResetPasswordForm onClick={handleResetPass} />

    </div>
  );
}

export default ResetPasswordPage
