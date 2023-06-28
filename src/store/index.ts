import { configureStore, combineReducers, Action } from "@reduxjs/toolkit"
import thunkMiddleware, { ThunkAction } from 'redux-thunk'

const rootReducer = combineReducers({

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