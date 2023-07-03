import { LOGIN_SUCCESS, LOGOUT } from "./actions";
import { LoginActionType, LoginStateType } from "./types";

const initialState: LoginStateType = {
  email: '',
  token: '',
  id: ''
};

const authReducer = (state: LoginStateType = initialState, action: LoginActionType): LoginStateType => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        id: action.payload.id,
        token: action.payload.token
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
