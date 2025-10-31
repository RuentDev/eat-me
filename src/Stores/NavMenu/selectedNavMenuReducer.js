import { SET_SELECTED_NAV_MENU } from './selectedNavMenuActionTypes'

const seletedNavMenuInitialState = {
    selectedNavMenu: [],
}

const selectedNavMenuReducer = ( state = seletedNavMenuInitialState, action) => {
    switch (action.type) {
        case SET_SELECTED_NAV_MENU:
            return {
                ...state,
                selectedNavMenu: action.payload.selectedNavMenu
            };
    
        default:
            return state;
    }
}

export default selectedNavMenuReducer;