import "./imageslider.css";
import { COLORS, constants, FONTS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = () => {
  const handleClickNext = () => {
    const offset = 1;
    const slides = document.getElementById("dataSlides");
    const activeSlide = document.querySelector(".active");

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].classList.add("active");
    activeSlide.classList.remove("active");
  };

  const handleClickPrev = () => {
    const offset = -1;
    const slides = document.getElementById("dataSlides");
    const activeSlide = document.querySelector(".active");

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;

    slides.children[newIndex].classList.add("active");
    activeSlide.classList.remove("active");
  };

  return (
    <div className="carousel-slider" aria-label="Newest Photos">
      <div className="carousel">
        <div
          onClick={handleClickPrev}
          className="carousel-button prev"
          data-carousel-button="prev"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="image-slider-button"
          />
        </div>
        <div
          className="carousel-button next"
          data-carousel-button="next"
          onClick={handleClickNext}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="image-slider-button"
          />
        </div>

        <ul id="dataSlides" className="carousel-image-container">
          {constants.carouselImage.map((photo, index) => (
            <li key={photo.id} className={`slide${photo.class}`}>
              <img src={photo.image} alt="slider" />

              <div className="carousel-inner-content">
                <img
                  src="\images\Home2Slider\slider_icon_1_img_small.png"
                  alt=""
                  height={50}
                />
                <h3 style={{ color: COLORS.red, ...FONTS.h3 }}>
                  {photo.details}
                  <span style={{ color: COLORS.orange }}> {photo.span}</span>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageSlider;
