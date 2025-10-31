import { productActionTypes } from "./fetchProductActionTypes"

export const  fetchProductRequest = () => {
    return {
        type: productActionTypes.FETCH_PRODUCT_REQUEST,
    }
}

export const fetchProductRequestSuccess = (products) => {
    return { 
        type: productActionTypes.FETCH_PRODUCT_REQUEST_SUCCESS,
        payload: products,
    }
}

export const fetchProductRequestStatus = (status) => {
    return { 
        type: productActionTypes.FETCH_PRODUCT_REQUEST_STATUS,
        payload: status,
    }
}

export const fetchProductRequestError = async (error) => {
    return { 
        type: productActionTypes.FETCH_PRODUCT_REQUEST_ERROR,
        payload: error,
    }
}

export const setSelectedProduct = (selectedProduct) => {
    return { 
        type: productActionTypes.SET_SELECTED_PRODUCT,
        payload: selectedProduct,
    }
}
export const setShowStatusText = (setShowStatusText) => {
    return { 
        type: productActionTypes.SET_SHOW_STATUS_TEXT,
        payload: setShowStatusText,
    }
}
