import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./Product.css";
const Product = () => {
  return (
    <div className="product">
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="info">
        <h4>Name goes here</h4>
        <div className="inner-info">
          <span className="colorize bold">$145424</span>
          <span>Category</span>
        </div>
        <button>
          Add to Cart <MdOutlineAddShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;
