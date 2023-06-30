import { TypeMovies } from "../../api/shaped/types"
import { MoviesStateType, MoviesActionType } from "./types"


const initValue: MoviesStateType = {

  docs: [],
  page: 1,
  trend: []
}

export const MovieReducer = (state: MoviesStateType = initValue, action: MoviesActionType): MoviesStateType => {

  switch (action.type) {
    case 'LOAD_MOVIES':
      // if (Array.isArray(action.payload)) {
      return {
        ...state,
        // docs: [...state.docs, ...(action.payload as TypeMovies[])],
        docs: [...state.docs, ...(action.payload as TypeMovies[])],
        trend: []
        // total: (action.payload as MyResponseType<TypeMovies[]>).total,
        // docs: (action.payload as MyResponseType<TypeMovies[]>).docs
      }
    // }
    // return state;
    case 'LOAD_TREND_MOVIES':
      return {
        ...state,
        docs: [],
        trend: [...state.trend, ...(action.payload as TypeMovies[])],
        // total: (action.payload as MyResponseType<TypeMovies[]>).total,
        // docs: (action.payload as MyResponseType<TypeMovies[]>).docs
      }
    case 'INC_PAGE':
      return {
        ...state,
        page: state.page + 1
      }
      case 'DEFAULT_PAGE':
        return {
          ...state,
          page: 1
        }
    default:
      return state
  }
}
