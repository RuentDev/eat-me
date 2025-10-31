import Axios from 'axios'

import { FETCH_USER_REQUEST, FETCH_USER_REQUEST_SUCCESS, FETCH_USER_REQUEST_ERROR } from './userActionTypes'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserRequestSuccess = () => {
    return async (dispatch, getState) => {

        const response = await Axios.get('http://localhost:3001/auth');
        
        dispatch({
            type: FETCH_USER_REQUEST_SUCCESS,
            payload: response.data,
        });
    }
}

export const fetchUserRequestError = async () => {
    return async (dispatch, getState) => {

        const response = await Axios.get('http://localhost:3001/auth');
        
        dispatch({
            type: FETCH_USER_REQUEST_ERROR,
            payload: response.statusText,
        });
        
    }
}

