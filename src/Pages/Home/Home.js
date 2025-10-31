import "./home.css";
import React, { useEffect } from "react";
import {
  Button,
  IconButton,
  BootstrapCard,
  CustomizableMenu,
  AnimatedCounter,
  FoodGallery,
  CustomizableBlogSection,
} from "../../components";
import { COLORS, constants, dummyData, FONTS } from "../../constants";
import {
  fetchProductRequest,
  fetchProductRequestSuccess,
  fetchProductRequestError,
} from "../../Stores/Products/fetchProductAction";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts.products);

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

  useEffect(() => {
    console.log();
    // console.log(dummyData.deliciousFood.filter(item => item.category === 'special'))
  }, []);

  return (
    <>
      {/* LandingSection */}
      <div className="landing-section">
        <div
          className="container landing-section-container"
          style={{ backgroundImage: `url(${`/images/landing-section.jpg`})` }}
        >
          <div className="landings-section-main-content">
            <h3 style={{ ...FONTS.body1, color: COLORS.black }}>
              Good Food choices are Good Investment
            </h3>
            <p style={{ ...FONTS.body5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.
            </p>
            <div className="landing-section-button-container">
              <IconButton
                label="Order Now"
                icon={<i className="fas fa-shopping-basket"></i>}
                buttonStyle={{
                  flexDirection: "row-reverse",
                  ...FONTS.body5,
                  color: COLORS.white,
                  padding: ".2rem .5rem",
                  backgroundColor: COLORS.primary,
                }}
              />
              <IconButton
                label="Learn More"
                icon={<i className="fas fa-angle-right"></i>}
                buttonStyle={{
                  flexDirection: "row-reverse",
                  ...FONTS.body5,
                  color: COLORS.black,
                  padding: ".5rem",
                }}
              />
            </div>
          </div>
          <div className="landings-section-image-content"></div>
        </div>
      </div>

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

      <div className="services-section">
        <div className="container services-container">
          {constants.services.map((service) => (
            <div key={service.id} className="services">
              <img
                className="services-image"
                src={service.image}
                height={150}
                alt="Services"
              />
              <h3 style={{ ...FONTS.h4, margin: "1rem 0" }}>{service.title}</h3>
              <p style={{ ...FONTS.body5 }}>{service.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="horizontal-devider"></div>

      <div className="products-section">
        <div className="products-section-heading-container">
          <h1 style={{ ...FONTS.h3, textAlign: "center" }}>Delicious Food</h1>
          <p style={{ ...FONTS.body5, color: COLORS.darkGray, width: "60%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo.
          </p>
        </div>
        <div className="container card-container">
          {dummyData.deliciousFood.map((item) => (
            <BootstrapCard
              key={item.id}
              image={item.image}
              title={item.title}
              deliveryTime={"Time: 15 - 20 Minutes | Serves: 1"}
              price={item.price}
              prefix="$"
              btnText="Order Now"
              productID={item.id}
            />
          ))}
        </div>
      </div>

      <div className="horizontal-devider"></div>

      <div className="best-food-tradition">
        <div className="container">
          <div className="best-food-column">
            <img
              className="best-food-tradition-image"
              src="/images/food/TraditionalFood1.jpg"
              alt="TraditionalFood1"
            />
            <img
              className="best-food-tradition-image"
              src="/images/food/TraditionalFood2.jpg"
              alt="TraditionalFood1"
            />
          </div>
          <div className="best-food-column">
            <h3 className="best-food-tradition-heading">
              Best Food and Tradition From The Whole World
            </h3>
            <p className="best-food-tradition-sub-heading">
              Lorem ipsum, dolor sit amet consectetur elit. Suscipit aliquid
              reprehenderit cumque ex labore ea consectetur adipisici hic minus
              eveniet itaque animi totam.
            </p>
            <ul className="best-food-tradition-text-list">
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  tempora.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  tempora. Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  tempora.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="horizontal-devider"></div>

      <div className="special-menu-section">
        <div className="container">
          <CustomizableMenu
            menuTitle="Special Menu"
            menuButtonData={constants.specialMenuButtonData}
            buttonColumnNumber={4}
            data={dummyData.deliciousFood.filter((item) => {
              return item.category.includes("special");
            })}
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
            data={dummyData.deliciousFood.filter((item) => {
              return item.category.includes("top");
            })}
            menuCardDesign="fancy"
            buttonColumnNumber={3}
          />
        </div>
      </div>

      <div className="horizontal-devider"></div>

      <div className="food-image-gallery-section">
        <FoodGallery />
      </div>

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
    </>
  );
};

export default Home;
