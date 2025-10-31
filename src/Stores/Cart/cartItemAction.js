import { cartActionTypes } from "./cartItemActionTypes";

export const fetchCartItems = () => {
  return {
    type: cartActionTypes.FETCH_CART_ITEMS,
  };
};

export const fetchCartItemsSuccess = (cartItems) => {
  return {
    type: cartActionTypes.FETCH_CART_ITEMS_SUCCESS,
    payload: cartItems,
  };
};

export const fetchCartItemsError = async (error) => {
  return {
    type: cartActionTypes.FETCH_CART_ITEMS_ERROR,
    payload: error,
  };
};

export const setTotalAmount = (totalAmount) => {
  return (dispatch) =>
    dispatch({
      type: cartActionTypes.SET_TOTAL_AMOUNT,
      payload: totalAmount,
    });
};
