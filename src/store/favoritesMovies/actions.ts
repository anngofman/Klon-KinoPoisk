import { TypeMovies } from "../../api/shaped/types";

export const addToFavorites = (movie: TypeMovies) => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload: movie
  };
};