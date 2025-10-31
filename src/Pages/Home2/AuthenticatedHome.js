import "./home2.css";
import React, { useState, useEffect } from "react";
import { COLORS, FONTS, constants } from "../../constants";

import axios from "axios";
import {
  fetchProductRequest,
  fetchProductRequestSuccess,
  fetchProductRequestError,
} from "../../Stores/Products/fetchProductAction";
import { useDispatch, useSelector } from "react-redux";
import {
  AnimatedCounter,
  Button,
  CustomizableBlogSection,
  CustomizableMenu,
  FoodGallery,
  ImageSlider,
} from "../../components";
import { Link } from "react-router-dom";

const AuthenticatedHome = () => {
  const allProducts = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    dispatch(fetchProductRequest());
    const res = await axios
      .get("http://localhost:3001/api/products")
      .catch((err) => {
        dispatch(fetchProductRequestError(err));
      });
    dispatch(fetchProductRequestSuccess(res.data));
  };

  return (
    <div className="auth-home">
      <div className="slider-banner-section">
        <ImageSlider />
      </div>

      <div className="horizontal-devider"></div>

      <div className="the-sound-of-taste-section">
        <div className="container heading-container">
          <h3 className="sound-taste-heading">The Sound of Taste</h3>
          <img
            className="sound-taste-heading-image"
            src="/images/sound-taste/chicken--1_89x43.png"
            alt=""
          />
        </div>
        <div className="container sound-taste-chicken">
          {constants.soundTaste.map((picture, index) => (
            <div key={picture.id} className="outer-sound-taste-container">
              <div className="inner-sound-taste-container">
                <img src={picture.image} alt={picture.title} />
                <div className="overlay"></div>
              </div>
              <h5 style={{ color: COLORS.primary }}>{picture.title}</h5>
              <Button
                containerStyle={{
                  height: "40px",
                  width: "110px",
                  fontSize: ".9rem",
                  backgroundColor: COLORS.darkGray,
                }}
                label="Read More"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="horizontal-devider"></div>

      <div className="grid-slider-section">
        <div className="inner-container-grid-slider">
          <div className="grid-slider column1">
            <Link to="#" title="Fried Chicken">
              <img src="/images/grid-slider/chicken1.jpg" alt="" />
            </Link>
          </div>
          <div className="grid-slider column2">
            <img src="/images/grid-slider/carosel-slider3_1175X.jpg" alt="" />
            <div className="content">
              <h3 style={{ color: COLORS.primary }}>Chicken Juicy Strips</h3>
              <p style={{ ...FONTS.body3 }}>Buy 1 Get 1</p>
              <Button label="Shop Now" />
            </div>
          </div>
          <div className="grid-slider column3">
            <Link to="#" title="Grilled Thandoori">
              <img src="/images/grid-slider/chicken2.jpg" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="horizontal-devider"></div>

      <div className="special-menu-section">
        <div className="container">
          <CustomizableMenu
            menuTitle="Special Menu"
            menuButtonData={constants.specialMenuButtonData}
            data={allProducts}
          />
        </div>
      </div>

      <div className="horizontal-devider"></div>

      <div className="animated-counter-section">
        <AnimatedCounter />
      </div>

      <div className="horizontal-devider"></div>

      <div className="topselling-menu-section">
        <div className="container">
          <CustomizableMenu
            menuTitle="Top Selling"
            menuButtonData={constants.topSellingMenuButtonData}
            data={allProducts}
            menuCardDesign="fancy"
          />
        </div>
      </div>

      <div className="horizontal-devider"></div>

      <div className="food-image-gallery-section">
        <FoodGallery />
      </div>

      <div className="horizontal-devider"></div>

      {/* Flipbox Section */}

      <div className="horizontal-devider"></div>

      {/* Banner Section */}

      <div className="horizontal-devider"></div>

      {/* Blogs Section */}
      <div className="new-arrivals">
        <div className="container">
          <CustomizableBlogSection
            title="New Arrivals"
            data={constants.newArrivalBlogData}
          />
        </div>
      </div>

      <div className="horizontal-devider"></div>
    </div>
  );
};

export default AuthenticatedHome;
