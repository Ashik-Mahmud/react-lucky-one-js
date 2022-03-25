import React, { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import Product from "../Product/Product";
import { UseStorage } from "../Storage/Storage";
import "./Shop.css";
const Shop = ({ products }) => {
  const [savedItem, setSavedItem] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setSavedItem(UseStorage());
  }, []);

  const addedItems = products.filter((product) =>
    savedItem.includes(product.id)
  );

  setTimeout(() => setError(false), 10000);

  return (
    <>
      <section id="shop">
        <div className="container">
          <div className="shop-container">
            <div className="shop-contents">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  setSavedItem={setSavedItem}
                  setError={setError}
                />
              ))}
            </div>
            <div className="shop-dashboard">
              <h3>Items Summery</h3>
              <div className="cart-container">
                {addedItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <div className="carts-btn">
                <button className="draw-cart">Pick Best One</button>
                <button className="clear-cart">Clear Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`error-message ${error ? "active" : " "}`}>{error}</div>
    </>
  );
};

export default Shop;
