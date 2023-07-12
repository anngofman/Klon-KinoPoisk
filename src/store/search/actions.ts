import { AppThunk } from "..";
import { getSearchMovies } from "../../api/getSearchMovie";
import { TypeMovies } from "../../api/shaped/types";
import { startLoading, stopLoading } from "../loader/actions";

export const SEARCH_MOVIES='SEARCH_MOVIES'
export const SEARCH_CLEAR='SEARCH_CLEAR'

export const setSearchMovies = (movies:TypeMovies[]) => {
  return {
    type:SEARCH_MOVIES,
    payload:movies
  }
}

export const setSearchClear = () => {
  return {
    type:SEARCH_CLEAR,
  }
}

export const loadSearchMovies =  (limit: number, page: number, search: string): AppThunk => {
	return async (dispatch) => {
		dispatch(startLoading())
		const movies: TypeMovies[] = (await getSearchMovies(limit, page, search)).data.docs
		dispatch(setSearchMovies(movies))
    dispatch(stopLoading())
	}
}