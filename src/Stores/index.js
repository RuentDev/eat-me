
import * as Redux from 'redux';
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { combineReducers } from "redux";

import fetchUsersReducer from "./Users/fetchUserReducer";
import fetchProductReducer from './Products/fetchProductReducer'
import selectedTabReducer from './DashboardTab/selectedTabReducer'
import selectedNavMenuReducer from './NavMenu/selectedNavMenuReducer';
import CartReducer from './Cart/CartReducer';

const rootReducer = combineReducers({
    allProducts: fetchProductReducer,
    fetchUsersReducer,
    selectedTabReducer,
    selectedNavMenuReducer,
    CartReducer,
})

export const store =  Redux.createStore(
    rootReducer,
    composeWithDevTools(Redux.applyMiddleware(thunkMiddleWare))
  )
