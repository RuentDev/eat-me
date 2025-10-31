import { OptionMenuContext } from "../ContextMenu/ContextMenu";
import {
  fetchProductRequest,
  fetchProductRequestSuccess,
  fetchProductRequestError,
  setSelectedProduct,
  fetchProductRequestStatus,
  setShowStatusText,
} from "../../../Stores/Products/fetchProductAction";

import { setSelectedTab } from "../../../Stores/DashboardTab/selectedTabAction";
import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const useAllProducts = () => {
  const [selectedOption, setSelectedOption] = useContext(OptionMenuContext);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.allProducts.loading);
  const products = useSelector((state) => state.allProducts.products);
  const statusDelText = useSelector((state) => state.allProducts.status);
  const showStatus = useSelector((state) => state.allProducts.showStatus);

  const [searchValue, setSearchValue] = useState("");
  const [statusText, setstatusText] = useState("");

  function renderNoProduct() {
    if (!products || loading) return <h5>{statusText}</h5>;
  }

  function handleOptionsClicked(id) {
    if (id === 1) {
      setSelectedOption("all_products");
      fetchProducts();
    } else if (id === 2) {
      setSelectedOption("publish");
      console.log(id);
    } else if (id === 3) {
      setSelectedOption("trash_products");
      fetchTrashProducts();
    }
  }

  const fetchProducts = async () => {
    dispatch(fetchProductRequest());
    const res = await axios
      .get("http://localhost:3001/api/products")
      .catch((err) => {
        dispatch(fetchProductRequestError(err));
      });

    dispatch(fetchProductRequestSuccess(res.data));
  };

  const fetchTrashProducts = async () => {
    dispatch(fetchProductRequest());

    const deletedProductRes = await axios
      .get("http://localhost:3001/api/products/trash")
      .catch((err) => {
        dispatch(fetchProductRequestError(err));
      });

    dispatch(fetchProductRequestSuccess(deletedProductRes.data.products));
  };

  const handleSearchProduct = async (e) => {
    e.preventDefault();
    dispatch(fetchProductRequest());
    const searchData = new FormData();
    searchData.append("search_product", searchValue);
    const searchRes = await axios
      .post("http://localhost:3001/api/products/search", searchData)
      .catch((err) => {
        dispatch(fetchProductRequestError(err));
      });
    dispatch(fetchProductRequestSuccess(searchRes.data.products));
    setstatusText(searchRes.data.statusText);
  };

  function renderDeleteStatus() {
    return (
      <div className="bg-danger rounded d-flex my-3">
        <p className="text-light p-2 my-auto mx-1">{statusDelText}</p>
      </div>
    );
  }

  //   PRODUCT COMPONENT LOGIC
  const restoreProduct = async (id) => {
    const restoreRespose = await axios
      .put(`http:localhost:3001/api/products/restore/${id}`)
      .catch((err) => {
        dispatch(fetchProductRequestError(err));
        console.log(err);
      });
    dispatch(fetchProductRequestSuccess(restoreRespose.data));
    console.log(restoreRespose.data);
  };

  function onEdit(product) {
    dispatch(setSelectedTab("product_form"));
    dispatch(setSelectedProduct(product));
  }

  const onDelete = async (id) => {
    const deleteRes = await axios
      .delete(`http://localhost:3001/api/products/deleteproduct/${id}`)
      .catch((err) => {
        console.log(err);
      });

    if (deleteRes.data.status === 200) {
      if (selectedOption === "all_products") {
        fetchProducts();
      } else if (selectedOption === "publish") {
        console.log("publish");
      } else if (selectedOption === "trash_products") {
        fetchTrashProducts(); //Fetch All deleted product and put it in redux state
      }
      // CREATE  STATUS RESPONSE ON THE TOP OF HEADER TITLE
      dispatch(setShowStatusText(true));
      dispatch(fetchProductRequestStatus(deleteRes.data.statusText));
      setTimeout(() => {
        dispatch(setShowStatusText(false));
      }, 5000);

      console.log(deleteRes.data.statusText);
    }
  };

  const onViewProduct = (product) => {
    dispatch(setSelectedTab("single_product"));
    dispatch(setSelectedProduct(product));
    console.log(product);
  };

  return {
    handleSearchProduct,
    handleOptionsClicked,
    renderNoProduct,
    renderDeleteStatus,
    setSearchValue,
    restoreProduct,
    onDelete,
    onViewProduct,
    fetchProductRequest,
    fetchProductRequestError,
    fetchProductRequestSuccess,
    dispatch,
    onEdit,

    searchValue,
    showStatus,
    products,
  };
};

export default useAllProducts;
