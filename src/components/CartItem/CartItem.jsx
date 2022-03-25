import React from "react";
import { BsTrash } from "react-icons/bs";
import "./CartItem.css";
const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="info">
          <h5>Name Goes here</h5>
          <small className="colorize bold">$24334</small>
          <small>Category</small>
        </div>
      </div>
      <button>
        <BsTrash />
      </button>
    </div>
  );
};

export default CartItem;
