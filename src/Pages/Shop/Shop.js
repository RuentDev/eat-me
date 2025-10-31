import "./shop.css";
import React, { useEffect } from "react";
import { FoodCard, ImageSlider, PriceRangeSlider } from "../../components";
import useShop from "./useShop";
import { category } from "./ShopPageData";
const Shop = () => {
  const {
    products,
    axios,
    fetchProductRequest,
    fetchProductRequestSuccess,
    fetchProductRequestError,
    dispatch,
  } = useShop();

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
  }, [dispatch, axios, fetchProductRequest, fetchProductRequestSuccess, fetchProductRequestError]);

  return (
    <div className="shop-page">
      <div className="shop-banner-section">
        <ImageSlider />
      </div>

      <div className="shop-product-section">
        <div className="shop-product-section-container container">
          <div className="shop-sidebar">
            <div className="shop-menu">
              <div className="category">
                <p className="menu-title">Category</p>
                <ul className="shop-category-menu-container">
                  {category.map((menu) => (
                    <li key={menu.id}>{menu.label}</li>
                  ))}
                </ul>
              </div>
              <div className="by-price">
                <p className="menu-title">Price Range</p>
                <PriceRangeSlider />
              </div>
            </div>
          </div>
          <div className="shop-product-container">
            {products.map((product) => (
              <FoodCard
                key={product.id}
                productId={product.id}
                title={product.product_name}
                image={`/product-uploads/${product.product_image}`}
                price={product.product_price}
                prefix="$"
                ratings={product.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
