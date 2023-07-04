import { ResetPassActionType } from './types';
export const PASSWORD_FORGOT_REQUEST = "PASSWORD_RESET_REQUEST";
export const PASSWORD_FORGOT_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_FORGOT_FAILURE = "PASSWORD_RESET_FAILURE";

export const passwordForgotRequest = (): ResetPassActionType => ({
  type: PASSWORD_FORGOT_REQUEST,
});

export const passwordForgotSuccess = (): ResetPassActionType => ({
  type: PASSWORD_FORGOT_SUCCESS,
});

export const passwordResetFailure = (error: string): ResetPassActionType => ({
  type: PASSWORD_FORGOT_FAILURE,
  payload: error,
});