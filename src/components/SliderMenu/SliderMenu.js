import './slidermenu.css'
import Slider  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { constants } from '../../constants';


const SliderMenu = () => {

    var settings = {
        autoplay: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: false,
                autoplay: true,
                arrows: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 400,
              settings: {
                dots: false,
                autoplay: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
        ]
    }

  return ( 
    <Slider {...settings}>
        {constants.menus.map((menu, index) => (
            <div key={menu.id} className="specialMenu">
                <img src={menu.image} alt={menu.label} />
                <p className='specialmenu-label'>{menu.label}</p>
            </div>
        ))}
    </Slider>
  );
};

export default SliderMenu;
