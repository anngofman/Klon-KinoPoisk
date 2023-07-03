import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import AuthLayout from '../layout/authLayout';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUp';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import NewPasswordPage from '../pages/NewPassword';
import MoviesPage from '../pages/MoviesPage';
import SingleMoviePage from '../pages/SingleMoviePage';
import SettingPage from '../pages/SettingPage';
import NotFoundPage from '../pages/NotFoundPage';
import TrendsMoviesPage from '../pages/TrendsMoviesPage';
import LogoutPage from '../pages/LogoutPage';
import FavoritesPage from '../pages/FavoritasMovies';
import SearchPage from '../pages/SearchPage';

const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MoviesPage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='movie/:movieId' element={<SingleMoviePage />} />
          <Route path='trends' element={<TrendsMoviesPage />} />
          <Route path='favorites' element={<FavoritesPage />} />
          <Route path='setting' element={<SettingPage />} />
          <Route path='search' element={<SearchPage />} />


          

        </Route>
        <Route path='/auth' element={<AuthLayout />} >
        <Route path='logout' element={<LogoutPage />} />
          <Route path='signIn' element={<SignInPage />} />
          <Route path='signUp' element={<SignUpPage />} />
          <Route path='resetPassword' element={<ResetPasswordPage />} />
          <Route path='newPassword' element={<NewPasswordPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPages