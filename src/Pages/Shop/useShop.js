import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductRequest,
  fetchProductRequestSuccess,
  fetchProductRequestError,
} from "../../Stores/Products/fetchProductAction";
import axios from "axios";
const useShop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  return {
    fetchProductRequest,
    fetchProductRequestSuccess,
    fetchProductRequestError,
    dispatch,
    products,
    axios,
  };
};

export default useShop;
