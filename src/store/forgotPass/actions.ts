import { ForgotPassActionType } from './types';
export const PASSWORD_FORGOT_REQUEST = "PASSWORD_RESET_REQUEST";
export const PASSWORD_FORGOT_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_FORGOT_FAILURE = "PASSWORD_RESET_FAILURE";

export const passwordForgotRequest = (): ForgotPassActionType => ({
  type: PASSWORD_FORGOT_REQUEST,
});

export const passwordForgotSuccess = (): ForgotPassActionType => ({
  type: PASSWORD_FORGOT_SUCCESS,
});

export const passwordResetFailure = (error: string): ForgotPassActionType => ({
  type: PASSWORD_FORGOT_FAILURE,
  payload: error,
});