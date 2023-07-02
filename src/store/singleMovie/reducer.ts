import { SingleMovieActionType, SingleMovieStateType } from "./types"


const initValue: SingleMovieStateType = {
  movie: null
}

export const SingleMovieReducer = (state: SingleMovieStateType = initValue, action: SingleMovieActionType): SingleMovieStateType => {

  switch (action.type) {
    case 'LOAD_SINGLE_MOVIE':
      return {
        ...state,
        movie: action.payload
      }
    default:
      return state
  }
}
