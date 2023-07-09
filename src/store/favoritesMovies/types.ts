import { TypeMovies } from "../../api/shaped/types"

export type FavMoviesStateType = {
  favorites: TypeMovies[]
}

export type FavMoviesActionType = {
  type: string
  payload: TypeMovies
}