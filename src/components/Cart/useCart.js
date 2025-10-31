import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItems,
  fetchCartItemsSuccess,
  fetchCartItemsError,
  setTotalAmount,
} from "../../Stores/Cart/cartItemAction";

const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.CartReducer.cartItems);
  const totalAmount = useSelector((state) => state.CartReducer.totalAmount);
  const loading = useSelector((state) => state.CartReducer.loading);

  const fetchCartData = async () => {
    dispatch(fetchCartItems());
    const res = await axios
      .get("http://localhost:3001/api/cartitems")
      .catch((err) => {
        dispatch(fetchCartItemsError(err));
      });

    dispatch(fetchCartItemsSuccess(res.data));
  };

  const getCartTotal = () => {
    const initValue = 0.0;
    const amounts = cartItems.map((item) => item.item_price);
    const itemQuantity = cartItems.map((item) => item.item_quantity);
    const subTotal = amounts.map((e, index) => e * itemQuantity[index]);
    const total = subTotal.reduce((a, b) => a + b, initValue);

    return total.toFixed(2);
  };

  const deleteItem = (id, itemTotal) => {
    dispatch(fetchCartItems());
    axios
      .delete(`http://localhost:3001/api/cartitems/removetocart/${id}`)
      .then((res) => {
        dispatch(
          fetchCartItemsSuccess(
            cartItems.filter((cartItem) => cartItem.id !== id)
          )
        );
        dispatch(setTotalAmount(totalAmount - itemTotal));
      })
      .catch((err) => {
        dispatch(fetchCartItemsError(err));
        console.error(err);
      });
  };

  return {
    fetchCartData,
    getCartTotal,
    deleteItem,
    dispatch,
    loading,
    cartItems,
    totalAmount,
    axios,
    fetchCartItems,
    fetchCartItemsSuccess,
    fetchCartItemsError,
    setTotalAmount,
  };
};

export default useCart;
