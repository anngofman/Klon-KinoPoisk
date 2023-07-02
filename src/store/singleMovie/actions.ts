import { AppThunk } from ".."
import { getSingleMovie } from "../../api/getSingleMovie"
import { TypeSingleMovie } from "../../api/shaped/types"

export const setSingleMovies = (movie: TypeSingleMovie) => {
	return {
		type: 'LOAD_SINGLE_MOVIE',
		payload: movie
	}
}

export const loadSingleMovie = (id:number): AppThunk => {
	return async (dispatch) => {
		const movie = (await getSingleMovie(id)).data
		dispatch(setSingleMovies(movie))
	}
}
