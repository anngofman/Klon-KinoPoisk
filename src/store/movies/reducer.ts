import { MyResponseType, TypeMovies } from "../../api/shaped/types"
import { MoviesStateType, MoviesActionType } from "./types"


const initValue: MoviesStateType = {
  total: 0,
  docs: []
}

export const postsReducer = (state: MoviesStateType = initValue, action: MoviesActionType): MoviesStateType => {

  switch (action.type) {
    case 'LOAD_MOVIES':
      return {
        total: (action.payload as MyResponseType<TypeMovies[]>).total,
        docs: (action.payload as MyResponseType<TypeMovies[]>).docs
      }
    case 'SET_FAVORITE_MOVIE':
      return {
        total: (action.payload as MyResponseType<TypeMovies[]>).total,
        docs: state.docs.map(item => {
          if (item.id === action.payload) {
            if (item.favorites) {
              return {
                ...item,
                favorites: false
              }
            } else {
              return {
                ...item,
                favorites: true
              }
            }
          }
          else return item
        })
      }
    default:
      return state
  }
}
