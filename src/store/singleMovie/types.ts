import { TypeSingleMovie } from "../../api/shaped/types"

export type SingleMovieStateType = {
	movie: TypeSingleMovie | null
}

export type SingleMovieActionType = {
	type: string
	payload: TypeSingleMovie 
}