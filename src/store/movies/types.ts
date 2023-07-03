import { TypeMovies } from "../../api/shaped/types"

export type MoviesStateType = {
	docs: TypeMovies[]
	trend: TypeMovies[]
}

export type MoviesActionType = {
	type: string
	payload: TypeMovies[] | number
}