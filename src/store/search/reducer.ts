import { SEARCH_CLEAR, SEARCH_MOVIES } from "./actions";
import { SearchActionType, SearchStateType } from "./types";

const initialValue: SearchStateType = {
  search: []
}

export const SearchReducer = (state: SearchStateType = initialValue, action: SearchActionType): SearchStateType => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        search: action.payload
      }
    case SEARCH_CLEAR:
      return initialValue
    default:
      return state
  }
}