import { CLEAR_SELECT_TAB, SELECT_TAB } from "./actions";
import { TabsActionType, TabsStateType } from "./types";

const initialState: TabsStateType = {
  selectedTab: '',
};

const TabsReducer = (state: TabsStateType = initialState, action: TabsActionType): TabsStateType => {
  switch (action.type) {
    case SELECT_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };
    case CLEAR_SELECT_TAB:
      return initialState
    default:
      return state;
  }
};

export default TabsReducer;
