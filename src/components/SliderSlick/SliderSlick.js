import './slider.css'
import Slider  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSlick = ({
    autoplay = true,
	dots = false,
	infinite = true,
	speed = 1500,
	slidesToShow = 5,
	slidesToScroll = 1,
	initialSlide = null,
    cssEase = "linear",
	item,
}) => {
    var settings = {
        dots: dots,
        infinite: infinite,
        autoplay: autoplay,
        speed: speed,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        initialSlide: initialSlide,
        cssEase: cssEase,
        rows: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    rows: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    initialSlide: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    }

    return (
        <Slider {...settings} className="asd">
			{item.map((picture) => (
                <div key={picture.id} className="slider-item">
                    <img src={picture.image} alt="" />
                </div>
            ))}
        </Slider>
    )
}

export default SliderSlick
