export const SELECT_TAB = 'SELECT_TAB'

export const selectTab = (tabId:number) => {
  return {
    type: SELECT_TAB,
    payload: tabId
  }
}