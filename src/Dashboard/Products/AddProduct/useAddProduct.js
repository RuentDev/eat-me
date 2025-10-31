import React from "react";
import { useState } from "react";
import Axios from "axios";
import { setSelectedProduct } from "../../../Stores/Products/fetchProductAction";
import { setSelectedTab } from "../../../Stores/DashboardTab/selectedTabAction";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../../components";
import { COLORS } from "../../../constants";

const useAddProduct = () => {
  const product = useSelector((state) => state.allProducts.product);
  const dispatch = useDispatch();

  const [productSKU, setproductSKU] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [productPrice, setproductPrice] = useState(undefined);
  const [productStock, setproductStock] = useState(undefined);
  const [productImage, setProductImage] = useState("");
  const [productResText, setProductResText] = useState("");
  const [showStatus, setshowStatus] = useState(false);
  const fileImage = React.createRef();
  const [imageFilename, setImageFileName] = useState("");
  const [filePreview, setFilePreview] = useState("no-image-available.png");
  const [productSKUError, setproductSKUError] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [productDescriptionError, setproductDescriptionError] = useState("");
  const [productCategoryError, setproductCategoryError] = useState("");
  const [productPriceError, setproductPriceError] = useState("");
  const [productStockError, setproductStockError] = useState("");

  const saveProduct = async (event) => {
    event.preventDefault();
    const productData = new FormData();
    productData.append("product_sku", productSKU);
    productData.append("product_name", productName);
    productData.append("product_description", productDescription);
    productData.append("product_category", productCategory);
    productData.append("product_price", productPrice);
    productData.append("product_stock", productStock);
    productData.append("product_image", productImage);

    setTimeout(() => {
      setshowStatus(false);
    }, 10000);

    const res = await Axios.post(
      "http://localhost:3001/products/addproduct",
      productData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.data.status === 200) {
      setProductImage("");
      setproductSKU("");
      setProductName("");
      setproductDescription("");
      setproductCategory("");
      setproductPrice(undefined);
      setproductStock(undefined);
      setImageFileName("");
      setFilePreview("no-image-available.png");
      setProductResText(res.data);
      setshowStatus(true);
      document.getElementById("product_image").value = null;
    }
    if (res.data.status === 409) {
      setshowStatus(true);
      setProductResText(res.data);
    }
  };

  const updateProduct = async (event) => {
    event.preventDefault();

    setTimeout(() => {
      setshowStatus(false);
    }, 10000);

    const productData = new FormData();
    productData.append("product_sku", productSKU);
    productData.append("product_name", productName);
    productData.append("product_description", productDescription);
    productData.append("product_category", productCategory);
    productData.append("product_price", productPrice);
    productData.append("product_stock", productStock);
    productData.append("product_image", productImage);
    const updateRes = await Axios.put(
      `http://localhost:3001/products/updateproduct/${product.id}`,
      productData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (updateRes.data.status === 200) {
      setshowStatus(true);
      setProductResText(updateRes.data);
      document.getElementById("product_image").value = null;
    } else if (updateRes.data.status === 409) {
      setshowStatus(true);
      setProductResText(updateRes.data);
    }
  };

  const handleOnChangeImage = (e) => {
    const imageFile = fileImage.current.files[0];
    setProductImage(fileImage.current.files[0]);
    setImageFileName(imageFile.name);
    setFilePreview(URL.createObjectURL(imageFile));
  };

  const onRemoveImage = (e) => {
    setFilePreview("no-image-available.png");
    setProductImage("no-image-available.png");
    setImageFileName("No Image");
    document.getElementById("product_image").value = null;
  };

  function renderStatus() {
    if (productResText.status === 200 && showStatus)
      return <p className="add-product-status">{productResText.statusText}</p>;
    else if (productResText.status === 409 && showStatus)
      return (
        <p className="add-product-status warning">
          {productResText.statusText}
        </p>
      );
  }

  function renderCancelEditButton() {
    return (
      <Button
        label="Cancel"
        containerStyle={{
          borderRadius: "10px",
          backgroundColor: COLORS.gray,
        }}
        onClick={() => {
          dispatch(setSelectedProduct(""));
          dispatch(setSelectedTab("all_products"));
        }}
      />
    );
  }

  //   function saveIsDisable() {
  //     return productSKUError !== "" ||
  //       productNameError !== "" ||
  //       productDescriptionError !== "" ||
  //       productCategoryError !== "" ||
  //       productPriceError !== "" ||
  //       productStockError !== "" ||
  //       productSKU === "" ||
  //       productName === "" ||
  //       productDescription === "" ||
  //       productCategory === "" ||
  //       productPrice === "" ||
  //       productStock === undefined ||
  //       productImage === undefined
  //       ? true
  //       : false;
  //   }

  return {
    saveProduct,
    updateProduct,
    handleOnChangeImage,
    onRemoveImage,
    renderStatus,
    renderCancelEditButton,
    product,
    productName,
    productDescription,
    productCategory,
    productPrice,
    productStock,
    productImage,
    imageFilename,
    fileImage,
    filePreview,
    productSKU,
    productSKUError,
    productNameError,
    productDescriptionError,
    productCategoryError,
    productPriceError,
    productStockError,
    setproductSKUError,
    setProductNameError,
    setproductDescriptionError,
    setproductCategoryError,
    setproductPriceError,
    setproductStockError,
    setProductImage,
    setFilePreview,
  };
};

export default useAddProduct;
