import { FETCH_USER_REQUEST, FETCH_USER_REQUEST_SUCCESS, FETCH_USER_REQUEST_ERROR } from './userActionTypes';

const initialUsersState = {
    loading: true,
    users: [],
    error: ''
}

const fetchUsersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true, 
            }
        case FETCH_USER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: "", 
            }
        case FETCH_USER_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload, 
            }
        default:
            return state;
    }
}   

export default fetchUsersReducer;