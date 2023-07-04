import { ResetPassReducer } from './resetPassEmail/reducer';
import { configureStore, combineReducers, Action } from "@reduxjs/toolkit"
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { MovieReducer } from "./movies/reducer"
import { SingleMovieReducer } from "./singleMovie/reducer"
import { ThemeReducer } from "./theme/reducer"
import LoaderReducer from "./loader/reducer"
import authReducer from "./auth/reducer"
import { SearchReducer } from "./search/reducer"

const rootReducer = combineReducers({
  movies: MovieReducer,
  singleMovie: SingleMovieReducer,
  theme: ThemeReducer,
  loader: LoaderReducer,
  auth: authReducer,
  search: SearchReducer,
  resetPass: ResetPassReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>