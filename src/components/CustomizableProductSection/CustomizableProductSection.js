import React from "react";
import { useSelector } from "react-redux";

const CustomizableProductSection = () => {
  const allProducts = useSelector((state) => state.allProducts.products);

  return (
    <div className="products-section">
      <div className="products-section-heading-container">
        <h1 style={{ ...FONTS.h3, textAlign: "center" }}>Delicious Food</h1>
        <p style={{ ...FONTS.body5, color: COLORS.darkGray, width: "60%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo.
        </p>
      </div>
      <div className="container card-container">
        {allProducts.slice(0, 6).map((item) => (
          <BootstrapCard
            key={item.id}
            image={`/product-uploads/${item.product_image}`}
            title={item.product_name}
            deliveryTime={"Time: 15 - 20 Minutes | Serves: 1"}
            price={item.product_price}
            prefix="$"
            btnText="Order Now"
            productID={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomizableProductSection;
