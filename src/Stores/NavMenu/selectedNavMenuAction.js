import { SET_SELECTED_NAV_MENU } from './selectedNavMenuActionTypes'



const setSelectedNavMenuSucess = ( selectedNavMenu ) => {
    return {
        type: SET_SELECTED_NAV_MENU,
        payload: { selectedNavMenu }
    }
}

export const setSelectedNavMenu = (selectedNavMenu) => {
    return (dispatch, getState) => {
        dispatch(setSelectedNavMenuSucess(selectedNavMenu));
    }
}