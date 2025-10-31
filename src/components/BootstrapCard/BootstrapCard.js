import "./bootstrapcard.css";
import { Button } from "..";
import { COLORS, FONTS } from "../../constants";

import useBootstrapCard from "./useBootstrapCard";

const BootstrapCard = ({
  productID,
  image,
  title,
  id,
  price,
  deliveryTime,
  btnText,
  prefix,
  suffix,
}) => {
  const { addToCart } = useBootstrapCard();

  return (
    <div className="card shadow">
      <div className="inner">
        <img className="cardImage card-img-top" src={image} alt={id} />
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{ ...FONTS.h5, color: COLORS.black }}>
          {title}
        </h5>
        <p className="card-text" style={{ ...FONTS.body5 }}>
          {deliveryTime}
        </p>
        <p
          className="card-text"
          style={{ ...FONTS.body4, color: COLORS.primary }}
        >
          {prefix}
          {price}
          {suffix}
        </p>
        {btnText && (
          <Button
            label="Order Now"
            containerStyle={{
              borderRadius: "0",
            }}
            onClick={() => addToCart(productID)}
          />
        )}
      </div>
    </div>
  );
};

export default BootstrapCard;
