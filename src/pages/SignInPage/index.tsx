import { useDispatch } from 'react-redux'
import SignInForm from '../../components/forms/SignIn'
import styles from './signIn.module.scss'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { loginSuccessAction } from '../../store/auth/actions';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSuccessAction({
          email: user.email as string,
          id: user.uid,
          token: user.refreshToken,
          name: user.displayName
        }));
        navigate('/', { replace: true })
      })
      .catch(console.error)
  }

  return (
    <div className={styles.signInPage}>
      <SignInForm onClick={handleLogin} />
    </div>
  )
}

export default SignInPage