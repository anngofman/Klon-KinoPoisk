export const SELECT_TAB = 'SELECT_TAB'
export const CLEAR_SELECT_TAB = 'CLEAR_SELECT_TAB'

export const selectTab = (tab:string) => {
  return {
    type: SELECT_TAB,
    payload: tab
  }
}

export const ClearSelectTab = () => {
  return {
    type: CLEAR_SELECT_TAB,
  }
}