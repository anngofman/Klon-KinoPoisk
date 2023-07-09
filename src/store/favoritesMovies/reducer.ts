import { TypeMovies } from "../../api/shaped/types";
import { saveStateToLocalStorage } from "../../localStorage";
import { FavMoviesActionType } from "./types";

const initialState: TypeMovies[] = []

export const favoritesReducer = (state: TypeMovies[] = initialState, action: FavMoviesActionType): TypeMovies[] => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      const movie = state.find(m => m.id === action.payload.id)
      // Проверяем, есть ли уже такой ID фильма в списке избранных
      if (!movie) {
        const updatedFavorites = [...state, action.payload]
        saveStateToLocalStorage(updatedFavorites)
        return [
          ...state,
          action.payload
        ];
      }
      return state;
    default:
      return state;
  }
};
