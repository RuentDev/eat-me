import { cartActionTypes } from "./cartItemActionTypes";

const cartInitialState = {
  loading: false,
  cartItems: [],
  totalAmount: 0.0,
  error: "",
};

const CartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case cartActionTypes.FETCH_CART_ITEMS:
      return {
        ...state,
        loading: true,
      };
    case cartActionTypes.FETCH_CART_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
        error: "",
      };
    case cartActionTypes.FETCH_CART_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        cartItems: [],
        error: action.payload,
      };
    case cartActionTypes.SET_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default CartReducer;
