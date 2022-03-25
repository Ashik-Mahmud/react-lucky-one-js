import React, { useEffect, useState } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import CartItem from "../CartItem/CartItem";
import Product from "../Product/Product";
import { UseStorage } from "../Storage/Storage";
import "./Shop.css";
const Shop = ({ products }) => {
  const [savedItem, setSavedItem] = useState([]);
  const [error, setError] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  useEffect(() => {
    setSavedItem(UseStorage());
  }, []);

  useEffect(() => {
    const addedItems = products.filter((product) =>
      savedItem.includes(product.id)
    );
    setCartItems(addedItems);
  }, [products, savedItem]);

  /* handle pick best one function */
  const handlePickBestOne = () => {
    setLoading(true);
    const items = UseStorage();
    const randomNum = Math.floor(Math.random() * items.length);
    const cartItem = products.find(
      (product) => product.id === items[randomNum]
    );

    setTimeout(() => {
      setCartItems([cartItem]);
      setLoading(false);
      setCelebrate(true);
    }, 5000);
  };

  /* handle Clear All function here  */
  const handleClearAll = () => {
    if (window.confirm("Do you want to clear all carts?")) {
      setSavedItem([]);
      localStorage.removeItem("carts");
    }
  };
  /* handle trash */
  const handleTrash = (id) => {
    if (window.confirm("Do you want to delete this item?")) {
      const itemsExceptDeleted = savedItem.filter((item) => item !== id);
      localStorage.setItem("carts", JSON.stringify(itemsExceptDeleted));
      setSavedItem(UseStorage());
    }
  };

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
                  setCelebrate={setCelebrate}
                />
              ))}
            </div>
            <div className="shop-dashboard">
              {savedItem?.length > 0 ? (
                <>
                  <h3>Items Summery</h3>
                  <div className="cart-container">
                    {!loading ? (
                      cartItems.map((item) => (
                        <CartItem
                          key={item.id}
                          item={item}
                          celebrate={celebrate}
                          handleTrash={handleTrash}
                        />
                      ))
                    ) : (
                      <div className="waiting">
                        <img
                          src="https://i.pinimg.com/originals/2b/02/15/2b02159fee58d573c079ad5212d56b63.gif"
                          alt="loader"
                        />
                      </div>
                    )}
                  </div>
                  <div className="carts-btn">
                    <button className="draw-cart" onClick={handlePickBestOne}>
                      Pick Best One
                    </button>
                    <button onClick={handleClearAll} className="clear-cart">
                      Clear Cart
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="empty-cart-items">
                    <h1>
                      <MdOutlineRemoveShoppingCart />
                    </h1>
                    <h3>No Items Found.</h3>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <div
        onClick={() => setError(false)}
        className={`error-message ${error ? "active" : " "}`}
      >
        {error}
      </div>
    </>
  );
};

export default Shop;
