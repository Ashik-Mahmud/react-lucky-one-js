import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { UseStorage } from "../Storage/Storage";
import { handleCartStorage } from "./HandleStorage";
import "./Product.css";
const Product = ({ product, setSavedItem, setError }) => {
  const { imageUrl, price, name, category, id } = product;

  const handleCartItem = (id) => {
    handleCartStorage(id, setError);
    setSavedItem(UseStorage());
  };

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
        <button onClick={() => handleCartItem(id)}>
          Add to Cart <MdOutlineAddShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;
