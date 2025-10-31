import { productActionTypes } from "./fetchProductActionTypes"

const initialProductResponseState = {
    loading: false,
    product: [],
    products: [],
    status: "",
    showStatus: false,
    error: "",
}

const fetchProductReducer = (state = initialProductResponseState, action) => {
    switch (action.type) {
        case productActionTypes.FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true, 
            }
        case productActionTypes.FETCH_PRODUCT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: "",
            }
        case productActionTypes.FETCH_PRODUCT_REQUEST_STATUS:
            return {
                ...state,
                loading: false,
                products: [],
                status: action.payload,
                error: "",
            }
        case productActionTypes.FETCH_PRODUCT_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload,
            }
        case productActionTypes.SET_SELECTED_PRODUCT:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: "",
            }
        case productActionTypes.SET_SHOW_STATUS_TEXT:
            return {
                ...state,
               showStatus: action.payload,
            }
        default:
            return state;
    }
}

export default fetchProductReducer;