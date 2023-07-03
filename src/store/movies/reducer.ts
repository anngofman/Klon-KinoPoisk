import { TypeMovies } from "../../api/shaped/types"
import { MoviesStateType, MoviesActionType } from "./types"

const initValue: MoviesStateType = {
  docs: [],
  trend: []
}

export const MovieReducer = (state: MoviesStateType = initValue, action: MoviesActionType): MoviesStateType => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return {
        ...state,
        docs: [...state.docs, ...(action.payload as TypeMovies[])],
        trend: []
      }
    case 'LOAD_TREND_MOVIES':
      return {
        ...state,
        docs: [],
        trend: [...state.trend, ...(action.payload as TypeMovies[])],
      }
    case 'DEFAULT_PAGE':
      return {
        ...state,
        docs: [],
        trend: []
      }
    case 'INITIAL_STATE':
      return initValue
    default:
      return state
  }
}
