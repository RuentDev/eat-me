// import React from "react";
import useBootstrapCard from "../BootstrapCard/useBootstrapCard";

const useFoodCard = () => {
  const { addToCart } = useBootstrapCard();

  function handleOnClickIcon(link, productId) {
    switch (link) {
      case "addtocart":
        addToCart(productId);
        break;

      default:
        break;
    }
  }

  return { handleOnClickIcon };
};

export default useFoodCard;
