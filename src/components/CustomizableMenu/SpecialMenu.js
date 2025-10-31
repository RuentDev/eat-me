import "./specialmenu.css";
import { Button, FoodCard, MenuCard } from "..";
import { COLORS } from "../../constants";
import { useState } from "react";

const CustomizableMenu = ({
  data,
  menuTitle,
  menuButtonData,
  menuCardDesign = "regular",
  buttonColumnNumber,
}) => {
  const [specialMenu, setSpecialMenu] = useState(menuButtonData);

  const handdleButtonClick = (id) => {
    setSpecialMenu(
      specialMenu.map((item) =>
        item.id === id
          ? { ...item, active: !item.active }
          : { ...item, active: false }
      )
    );
  };

  function renderRegularMenuCard() {
    return (
      <ul className="card-menu-container">
        {data.map((product, index) => (
          <MenuCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={
              "this veryasdadadadad asda asdasd erwqsdf nszac aqwf delicious easd is the jthe best ckeic"
            }
            prefix="$"
            // rating
          />
        ))}
      </ul>
    );
  }

  function renderFancyMenuCard() {
    return (
      <ul className="fancycard-menu-container">
        {data.map((product, index) => (
          <FoodCard
            key={product.id}
            productId={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={
              "this veryasdadadadad asda asdasd erwqsdf nszac aqwf delicious easd is the jthe best ckeic"
            }
            prefix="$"
            // rating
          />
        ))}
      </ul>
    );
  }

  return (
    <div className="special-menu">
      <div className="heading-container">
        <h3 className="special-menu-heading">{menuTitle}</h3>
        <img src="/images/chicken_itle_55x17.png" alt="" height={20} />
        <div 
          className="header-buttons" 
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${buttonColumnNumber}, 1fr)`
          }}
        >
          {specialMenu.map((button, index) => (
            <Button
              key={index}
              label={button.label}
              containerStyle={{
                margin: "0 .5rem",
                border: button.active ? null : `1px solid ${COLORS.orange}`,
                backgroundColor: button.active
                  ? COLORS.primary
                  : COLORS.darkGray,
               height: '3rem',
               width: '6rem',
               padding: '1rem',
               
              }}
              onClick={() => handdleButtonClick(button.id)}
            />
          ))}
        </div>
      </div>
      {menuCardDesign === "regular" ? renderRegularMenuCard() : null}
      {menuCardDesign === "fancy" ? renderFancyMenuCard() : null}
    </div>
  );
};

export default CustomizableMenu;
