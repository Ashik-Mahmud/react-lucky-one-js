import React from "react";
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
