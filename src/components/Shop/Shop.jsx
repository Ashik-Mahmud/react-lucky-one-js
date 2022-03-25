import React from "react";
import CartItem from "../CartItem/CartItem";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  return (
    <section id="shop">
      <div className="container">
        <div className="shop-container">
          <div className="shop-contents">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className="shop-dashboard">
            <h3>Items Summery</h3>
            <div className="cart-container">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div className="carts-btn">
              <button className="draw-cart">Pick Best One</button>
              <button className="clear-cart">Clear Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
