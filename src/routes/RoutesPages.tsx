import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import AuthLayout from '../layout/authLayout';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUp';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import NewPasswordPage from '../pages/NewPassword';
import MoviesPage from '../pages/MoviesPage';


const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MoviesPage />} />
          <Route path='posts' element={<MoviesPage />} />
          </Route>
          <Route path='/auth' element={<AuthLayout />} >
            <Route path='signIn' element={<SignInPage />} />
            <Route path='signUp' element={<SignUpPage />} />
            <Route path='resetPassword' element={<ResetPasswordPage />} />
            <Route path='newPassword' element={<NewPasswordPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPages