import { AppThunk } from ".."
import { getMovies } from "../../api/getMovies"
import { MyResponseType, TypeMovies } from "../../api/shaped/types"

export const setMovies = (movies: MyResponseType<TypeMovies[]>) => {
	return {
		type: 'LOAD_MOVIES',
		payload: movies
	}
}

export const loadMovies = (limit:number, offset:number): AppThunk => {
	return async (dispatch) => {
		const movies = await (await getMovies(limit, offset)).data
		dispatch(setMovies(movies as MyResponseType<TypeMovies[]>))
	}
}

export const setFavMoviesAction = (id: number) => {
	return {
		type: 'SET_FAVORITE_MOVIE',
		payload: id
	}
}
