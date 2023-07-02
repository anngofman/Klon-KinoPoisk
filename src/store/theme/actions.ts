import { ThemeActionType } from "./types"


export const themeLightAction = (): ThemeActionType => {
  return {
    type: 'SET_LIGHT_THEME'
  }
}

export const themeDarkAction = (): ThemeActionType => {
  return {
    type: 'SET_DARK_THEME'
  }
}