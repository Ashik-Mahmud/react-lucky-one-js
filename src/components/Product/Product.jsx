import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./Product.css";
const Product = ({ product }) => {
  const { imageUrl, price, name, category } = product;
  return (
    <div className="product">
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <div className="inner-info">
          <span className="colorize bold">${price}</span>
          <span>{category}</span>
        </div>
        <button>
          Add to Cart <MdOutlineAddShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;
