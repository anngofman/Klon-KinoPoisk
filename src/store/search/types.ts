
export type SearchMovieType = {
  id: number
  poster: string
  name: string
  genres: string[]
  rating: number
  favorites: boolean
}

export type SearchStateType = {
  search: SearchMovieType[]
}

export type SearchActionType = {
  type: string
  payload: SearchMovieType[]
}