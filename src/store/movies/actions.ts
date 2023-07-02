import { AppThunk } from ".."
import { getMovies, getTrendMovies } from "../../api/getMovies"
import { TypeMovies } from "../../api/shaped/types"

export const setMovies = (movies: TypeMovies[]) => {
	return {
		type: 'LOAD_MOVIES',
		payload: movies
	}
}

export const setTrendMovies = (movies: TypeMovies[]) => {
	return {
		type: 'LOAD_TREND_MOVIES',
		payload: movies
	}
}

export const loadTrendMovies = (limit: number, page: number): AppThunk => {
	return async (dispatch) => {
		const movies: TypeMovies[] = (await getTrendMovies(limit, page)).data.docs

		dispatch(setTrendMovies(movies))
	}
}

export const loadMovies = (limit: number, page: number): AppThunk => {
	return async (dispatch) => {
		const movies = (await getMovies(limit, page)).data.docs
		console.log(movies)
		dispatch(setMovies(movies))
	}
}

export const setFavMoviesAction = (id: number) => {
	return {
		type: 'SET_FAVORITE_MOVIE',
		payload: id
	}
}

export const setIncPage = () => {
	return {
		type: 'INC_PAGE'
	}
}

export const setDefaultPage = () => {
	return {
		type: 'DEFAULT_PAGE'
	}
}