import "./addproduct.css";
import React, { useEffect } from "react";
import {
  ImageUpload,
  InputSubmit,
  TextAreaInput,
  TextInput,
} from "../../../components";

import Utils from "../../../Utils/Utils";
import { COLORS } from "../../../constants";
import useAddProduct from "./useAddProduct";

const AddProduct = () => {
  const {
    saveProduct,
    updateProduct,
    handleOnChangeImage,
    onRemoveImage,
    renderStatus,
    renderCancelEditButton,
    imageFilename,
    filePreview,
    productSKUError,
    productNameError,
    productDescriptionError,
    productCategoryError,
    productPriceError,
    productStockError,
    product,
    productName,
    productSKU,
    productDescription,
    productCategory,
    productPrice,
    productStock,
    setproductSKU,
    setProductName,
    setproductDescription,
    setproductCategory,
    setproductPrice,
    setproductStock,
    fileImage,
    setproductSKUError,
    setProductNameError,
    setproductDescriptionError,
    setproductCategoryError,
    setproductPriceError,
    setproductStockError,
    setProductImage,
    setFilePreview,
  } = useAddProduct();

  useEffect(() => {
    const allwaysScrollToTop = () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    allwaysScrollToTop();
  });

  useEffect(() => {
    if (product) {
      setproductSKU(product.product_sku);
      setProductName(product.product_name);
      setproductDescription(product.product_description);
      setproductCategory(product.product_category);
      setproductPrice(product.product_price);
      setproductStock(product.product_stock);
      setProductImage(product.product_image);
      setFilePreview(`/product-uploads/${product.product_image}`);
    }
  }, [product]);

  return (
    <div className="addproduct-section form-container">
      <form onSubmit={product ? updateProduct : saveProduct}>
        <div className="column">
          <TextInput
            label="Product SKU"
            id="product_sku"
            labelStyle={{ fontSize: "1rem", fontWeight: "800" }}
            containerStyle={{ border: "none", width: "300px" }}
            inputStyle={{
              height: "30px",
              padding: "1.2rem",
              borderRadius: "5px",
              backgroundColor: COLORS.lightGray2,
            }}
            required={true}
            textValue={productSKU}
            errorText={productSKUError}
            onchange={(e) => {
              Utils.validateProductInput(e.target.value, setproductSKUError);
              setproductSKU(e.target.value);
            }}
            isDisabled={product ? true : false}
            placeholder="Enter product SKU"
          />

          <TextInput
            label="Product Name"
            id="product_name"
            labelStyle={{ fontSize: "1rem", fontWeight: "800" }}
            containerStyle={{ border: "none", width: "300px" }}
            inputStyle={{
              height: "30px",
              padding: "1.2rem",
              borderRadius: "5px",
              backgroundColor: COLORS.lightGray2,
            }}
            textValue={productName}
            errorText={productNameError}
            onchange={(e) => {
              Utils.validateProductInput(e.target.value, setProductNameError);
              setProductName(e.target.value);
            }}
            placeholder="Enter your product name"
          />
          <TextAreaInput
            label="Product Description"
            id="product_description"
            onchange={(e) => {
              Utils.validateProductInput(
                e.target.value,
                setproductDescriptionError
              );
              setproductDescription(e.target.value);
            }}
            // containerStyle={{}}
            inputStyle={{ backgroundColor: COLORS.lightGray2, width: "95%" }}
            textValue={productDescription}
            errorText={productDescriptionError}
            maxLength={250}
            placeholder="Maximum of 250 characters"
          />
          {renderStatus()}
          <div className="button-container">
            <InputSubmit
              buttonValue={product ? "Update Product" : "Add Product"}
            />
            {product ? renderCancelEditButton() : null}
          </div>
        </div>

        <div className="column">
          <ImageUpload
            id="product_image"
            label="Product Image"
            inputRef={fileImage}
            src={filePreview}
            fileName={imageFilename}
            onChange={handleOnChangeImage}
            closeOnclick={onRemoveImage}
          />
          <TextInput
            label="Product Category"
            labelStyle={{
              fontSize: "1rem",
              fontWeight: "800",
            }}
            id="product_category"
            containerStyle={{ border: "none", width: "100%" }}
            inputStyle={{
              height: "40px",
              padding: "1.2rem",
              borderRadius: "5px",
              backgroundColor: COLORS.lightGray2,
            }}
            textValue={productCategory}
            errorText={productCategoryError}
            onchange={(e) => {
              Utils.validateProductInput(
                e.target.value,
                setproductCategoryError
              );
              setproductCategory(e.target.value);
            }}
            placeholder="Product category"
          />
          <TextInput
            label="Product Price"
            labelStyle={{
              fontSize: "1rem",
              fontWeight: "800",
            }}
            id="product_price"
            containerStyle={{ border: "none", width: "100%" }}
            inputStyle={{
              height: "40px",
              padding: "1.2rem",
              borderRadius: "5px",
              backgroundColor: COLORS.lightGray2,
            }}
            errorText={productPriceError}
            onchange={(e) => {
              Utils.validateInputInteger(e.target.value, setproductPriceError);
              setproductPrice(e.target.value);
            }}
            textValue={productPrice}
            placeholder="Product price"
          />
          <TextInput
            label="Product Stock"
            labelStyle={{
              fontSize: "1rem",
              fontWeight: "800",
            }}
            id="product_stock"
            containerStyle={{ border: "none", width: "100%" }}
            inputStyle={{
              height: "40px",
              padding: "1.2rem",
              borderRadius: "5px",
              backgroundColor: COLORS.lightGray2,
            }}
            textValue={productStock}
            errorText={productStockError}
            onchange={(e) => {
              Utils.validateInputInteger(e.target.value, setproductStockError);
              setproductStock(e.target.value);
            }}
            placeholder="Stock"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
