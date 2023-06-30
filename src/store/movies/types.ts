import { MyResponseType, TypeMovies } from "../../api/shaped/types"


export type MoviesStateType = {
	total:number
	docs: TypeMovies[]
}

export type MoviesActionType = {
	type: string
	payload: MyResponseType<TypeMovies[]> | number
}