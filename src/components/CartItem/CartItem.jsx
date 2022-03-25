import React from "react";
import { BsTrash } from "react-icons/bs";
import "./CartItem.css";
const CartItem = ({ item, celebrate, handleTrash }) => {
  const { imageUrl, name, category, price, id } = item;

  return (
    <div className="cart-item">
      <img
        className={`active ${celebrate ? "block" : " "}`}
        src="https://acegif.com/wp-content/gif/confetti-4.gif"
        alt=""
      />
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
      <button onClick={() => handleTrash(id)}>
        <BsTrash />
      </button>
    </div>
  );
};

export default CartItem;
