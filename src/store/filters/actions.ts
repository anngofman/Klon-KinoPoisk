import { FiltersActionType } from "./types"

export const filtersOpenAction = (): FiltersActionType => {
  return {
    type: 'SET_OPEN_FILTERS'
  }
}

export const filtersCloseAction = (): FiltersActionType => {
  return {
    type: 'SET_CLOSE_FILTERS'
  }
}