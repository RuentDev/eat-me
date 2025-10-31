import { Rating } from 'react-simple-star-rating';
import './menucard.css'


const MenuCard = ({
    image,
    title,
    price,
    description,
    prefix,
    suffix,
}) => {
  return (
      <div className="menu-card">
          <div className="menucard-image-container">
            <img src={image} alt={title} />
          </div>
          <div className="menucard-content-container">
                <div className="menucard-description">
                    <h4>{title}</h4>
                    <p className='description'>{description}</p>
                </div>
                <div className="menucard-price-rating">
                    <p className='price'>{prefix}{price}{suffix}</p>
                    <Rating 
                        size={17}
                    />
                </div>
          </div>
      </div>
  )
};

export default MenuCard;
