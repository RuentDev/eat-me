import { SET_SELECTED_TAB } from './selectedTabActionTypes'



const setSelectedTabSuccess = ( selectedTab ) => {
    return {
        type: SET_SELECTED_TAB,
        payload: { selectedTab }
    }
}

export const setSelectedTab = (selectedTab) => {
    return (dispatch, getState) => {
        dispatch(setSelectedTabSuccess(selectedTab));
    }
}