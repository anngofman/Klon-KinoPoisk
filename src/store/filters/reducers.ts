import { FiltersActionType, FiltersStateType } from "./types"

const initialValue: FiltersStateType = {
  isOpen: false
}

export const FiltersReducer = (state: FiltersStateType = initialValue, action: FiltersActionType ):FiltersStateType => {
  switch (action.type) {
    case 'SET_OPEN_FILTERS':
      return {
        ...state,
        isOpen: true
      }
    case 'SET_CLOSE_FILTERS':
      return {
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}