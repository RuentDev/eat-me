import "./allproducts.css";
import { productTableHeading, topOption } from "./frontEndData";
import Product from "./Product";
import { SearchBox } from "../../../components";
import { COLORS } from "../../../constants";

import useAllProducts from "./useAllProducts";
import { useEffect } from "react";
import axios from "axios";
const AllProducts = () => {
  const {
    handleSearchProduct,
    handleOptionsClicked,
    renderDeleteStatus,
    renderNoProduct,
    setSearchValue,
    fetchProductRequest,
    fetchProductRequestSuccess,
    fetchProductRequestError,
    dispatch,
    products,
    showStatus,
    searchValue,
  } = useAllProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchProductRequest());
      const res = await axios
        .get("http://localhost:3001/api/products")
        .catch((err) => {
          dispatch(fetchProductRequestError(err));
        });

      dispatch(fetchProductRequestSuccess(res.data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="allproducts">
      <div>
        <h5>All Products</h5>
      </div>

      <div className="products-options">
        {topOption.map((item, index) => {
          return (
            <div
              className="products-option"
              key={item.id}
              onClick={() => handleOptionsClicked(item.id)}
            >
              {item.label}
            </div>
          );
        })}
        {/* Search Box */}
        <div>
          <SearchBox
            id="search_product"
            placeholder="Enter product SKU"
            handleSubmit={handleSearchProduct}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
            containerStyle={{
              backgroundColor: COLORS.lightGray2,
              marginLeft: "1rem",
            }}
            inputStyle={{ backgroundColor: COLORS.lightGray2 }}
          />
        </div>
      </div>

      {showStatus && renderDeleteStatus()}

      <div className="heading">
        {productTableHeading.map((heading, index) => {
          return (
            <p className="heading-title" key={heading.id}>
              <strong>{heading.label}</strong>
            </p>
          );
        })}
      </div>

      <div className="product-table">
        {/* Product Data */}
        <div className="products-container">
          {renderNoProduct()}
          {products.length > 0
            ? products.map((product, index) => {
                return <Product key={product.id} product={product} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
