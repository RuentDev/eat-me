import "./foodcard.css";
import { productOption } from "./FoodCardData";
import { Rating } from "react-simple-star-rating";
import useFoodCard from "./useFoodCard";
const FoodCard = ({
  productId,
  ratings,
  price,
  title,
  image,
  prefix,
  suffix,
}) => {
  const { handleOnClickIcon } = useFoodCard();

  return (
    <div className="foodcard">
      <div className="foodcard-image-container">
        <img className="foodcard-image" src={image} alt="" />
        <ul className="product-option">
          {productOption.map((option) => (
            <li
              key={option.id}
              className="product-option-button"
              onClick={() => handleOnClickIcon(option.link, productId)}
              title={option.title}
            >
              {option.icon}
            </li>
          ))}
        </ul>
      </div>
      <div className="foodcard-details">
        <h5 className="food-title">{title}</h5>
        <div className="foodcard-priceAndrating">
          <h5 className="foodcard-price">
            {prefix}
            {price}
            {suffix}
          </h5>
          <Rating
            className="foodcard-rating"
            ratingValue={ratings}
            readonly={true}
            size={15}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
