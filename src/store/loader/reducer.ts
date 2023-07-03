import { START_LOADING, STOP_LOADING } from './actions';
import { LoaderActionType, LoaderStateType } from './types';

const initialState: LoaderStateType = {
  isLoading: false
};

const LoaderReducer = (state: LoaderStateType = initialState, action: LoaderActionType) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default LoaderReducer;
