import { SET_SELECTED_TAB } from './selectedTabActionTypes'

const seletedTabInitialState = {
    selectedTab: "dashboard",
}

const selectedTabReducer = (state = seletedTabInitialState, action) => {
    switch (action.type) {
        case SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload.selectedTab
            };
    
        default:
            return state;
    }
}

export default selectedTabReducer;