import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchCartItems,
  fetchCartItemsSuccess,
  fetchCartItemsError,
  setTotalAmount,
} from "../../Stores/Cart/cartItemAction";

const useBootstrapCard = () => {
  const dispatch = useDispatch();

  const addToCart = (id) => {
    let data = { id: id };
    axios
      .post(`http://localhost:3001/api/cartitems/addtocart`, data)
      .then((res) => {
        fetchCartData();
      })
      .catch((err) => {
        dispatch(fetchCartItemsError(err));
      });
  };

  const fetchCartData = () => {
    dispatch(fetchCartItems());
    axios
      .get("http://localhost:3001/api/cartitems")
      .then((res) => {
        dispatch(fetchCartItemsSuccess(res.data));
        getTotal(res.data.map((item) => item.item_total));
      })
      .catch((err) => {
        console.error(err);
        dispatch(fetchCartItemsError(err));
      });
  };

  const getTotal = (prices) => {
    const total = prices.reduce(
      (current, prev) => parseFloat(current) + parseFloat(prev)
    );
    dispatch(setTotalAmount(total));
  };

  return {
    addToCart,
  };
};

export default useBootstrapCard;
