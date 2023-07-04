import styles from './signUn.module.scss'
import SignUpForm from '../../components/forms/SignUp'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { loginSuccessAction } from '../../store/auth/actions';
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSuccessAction({
          email: user.email as string,
          id: user.uid,
          token: user.refreshToken
        }));
        navigate('/', { replace: true })
      })
      .catch(console.error)

  }
  return (
    <div className={styles.signUnPage}>
      <SignUpForm onClick={handleRegister} />
    </div>
  )
}

export default SignUpPage