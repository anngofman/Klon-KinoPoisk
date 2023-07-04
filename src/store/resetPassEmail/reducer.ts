import { PASSWORD_RESET_FAILURE, PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS } from './actions';
import { ResetPassActionType, ResetPassStateType } from './types';

const initialState: ResetPassStateType = {
  isLoading: false,
  error: null,
  isSuccess: false
}

export const ResetPassReducer = (state: ResetPassStateType = initialState, action: ResetPassActionType): ResetPassStateType => {
  switch (action.type) {
    case PASSWORD_RESET_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isSuccess:true
      }
    case PASSWORD_RESET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload as string
      }
    default:
      return state
  }
}