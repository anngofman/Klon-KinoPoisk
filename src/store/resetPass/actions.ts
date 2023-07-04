import { ResetPassActionType } from './types';
export const PASSWORD_RESET_REQUEST = "PASSWORD_RESET_REQUEST";
export const PASSWORD_RESET_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAILURE = "PASSWORD_RESET_FAILURE";

export const passwordResetRequest = (): ResetPassActionType => ({
  type: PASSWORD_RESET_REQUEST,
});

export const passwordResetSuccess = (): ResetPassActionType => ({
  type: PASSWORD_RESET_SUCCESS,
});

export const passwordResetFailure = (error: string): ResetPassActionType => ({
  type: PASSWORD_RESET_FAILURE,
  payload: error,
});