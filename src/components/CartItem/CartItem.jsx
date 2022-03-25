import React from "react";
import { BsTrash } from "react-icons/bs";
import "./CartItem.css";
const CartItem = ({ item }) => {
  const { imageUrl, name, category, price } = item;
  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <div className="image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="info">
          <h5>{name}</h5>
          <small className="colorize bold">${price}</small>
          <small>{category}</small>
        </div>
      </div>
      <button>
        <BsTrash />
      </button>
    </div>
  );
};

export default CartItem;
