import { TypeMovies } from "../api/shaped/types";

export const localStorageKey = 'reduxState';

// Функция для получения сохраненного состояния из localStorage
export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(localStorageKey);
    if (serializedState === null) {
      return undefined;
    }
    const parsedState = JSON.parse(serializedState);
    return parsedState
  } catch (error) {
    console.log('Error loading state from localStorage:', error);
    return undefined;
  }
};

// Функция для сохранения состояния в localStorage
export const saveStateToLocalStorage = (fav: TypeMovies[]) => {
  try {
    const serializedState = JSON.stringify(fav);
    localStorage.setItem(localStorageKey, serializedState);
  } catch (error) {
    console.log('Error saving state to localStorage:', error);
  }
};






