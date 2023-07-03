import {LoginActionType, LogoutActionType, UserType } from "./types"

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccessAction = (user: UserType): LoginActionType => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}

export const logoutAction = (): LogoutActionType => {
  return {
    type: LOGOUT
  }
}

