import { PASSWORD_FORGOT_FAILURE, PASSWORD_FORGOT_REQUEST, PASSWORD_FORGOT_SUCCESS } from './actions';
import { ForgotPassActionType, ForgotPassStateType } from './types';

const initialState: ForgotPassStateType = {
  isLoading: false,
  error: null,
  isSuccess: false
}

export const ForgotPassReducer = (state: ForgotPassStateType = initialState, action: ForgotPassActionType): ForgotPassStateType => {
  switch (action.type) {
    case PASSWORD_FORGOT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case PASSWORD_FORGOT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isSuccess:true
      }
    case PASSWORD_FORGOT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload as string
      }
    default:
      return state
  }
}