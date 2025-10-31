import "./cart.css";
import IconButton from "../IconButton";
import { useEffect } from "react";
import useCart from "./useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({
  itemId,
  itemName,
  itemImage,
  itemPrice,
  itemTotal,
  itemquantity,
  prefix,
  suffix,
}) => {
  const { deleteItem } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-container">
        <div
          className="remove-item"
          onClick={(e) => deleteItem(itemId, itemTotal, e)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="cart-item-image-container">
          <img src={itemImage} alt="" />
        </div>
        <div className="cart-item-content">
          <p>{itemName}</p>
          <div className="item-price-quantity">
            {prefix} {itemPrice} {suffix} x {itemquantity}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartModal = ({ cartData, prefix, suffix }) => {
  const { getCartTotal } = useCart();

  return (
    <div className="cart-modal">
      <div className="arrow"></div>
      <div className="cart-header">
        <h5>Cart Items</h5>
      </div>

      <div
        className="cart-modal-outer-container"
        style={{
          height: cartData.length <= 0 ? "50px" : "250px",
          overflow: cartData.length <= 0 ? "unset" : "auto",
        }}
      >
        {cartData.length <= 0 ? (
          <p className="no-cart-item-message">Your cart is empty</p>
        ) : (
          <div className="cart-modal-container">
            {cartData.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                itemId={cartItem.id}
                itemName={cartItem.item_name}
                itemImage={`/product-uploads/${cartItem.item_image}`}
                itemPrice={cartItem.item_price}
                itemquantity={cartItem.item_quantity}
                itemTotal={cartItem.item_total}
                prefix={prefix}
                suffix={suffix}
              />
            ))}
          </div>
        )}
      </div>

      <div className="cart-bottom-content">
        <p className="total-price">
          Total: {prefix} {getCartTotal()} {suffix}
        </p>
        <div className="cart-bottom-container">
          <IconButton
            label="Check Out"
            icon={<i className="fas fa-check"></i>}
          />
          <IconButton
            label="View Cart"
            icon={<i className="fas fa-shopping-cart"></i>}
          />
        </div>
      </div>
    </div>
  );
};

const Cart = ({ prefix, suffix }) => {
  const {
    dispatch,
    fetchCartItems,
    fetchCartItemsError,
    fetchCartItemsSuccess,
    axios,
    cartItems,
  } = useCart();

  useEffect(() => {
    const fetchCartData = async () => {
      dispatch(fetchCartItems());
      const res = await axios
        .get("http://localhost:3001/api/cartitems")
        .catch((err) => {
          dispatch(fetchCartItemsError(err));
        });

      dispatch(fetchCartItemsSuccess(res.data));
    };
    fetchCartData();
  }, [dispatch]);

  return (
    <div className="cart-icon-container">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <div className="item-number">{cartItems.length}</div>
      <CartModal cartData={cartItems} prefix={prefix} suffix={suffix} />
    </div>
  );
};

export default Cart;
