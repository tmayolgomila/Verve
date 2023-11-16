
import React from "react";
import "./styles.css";

const Cart = ({ cartItems }) => {
    console.log(cartItems)
  return (
    <div className="cartContainer">
    <h1>Shopping Cart</h1>
    <ul className="cartList">
      {cartItems.map((item) => (
        <li key={item.id}>
          <div className="cartItemContent">
            <img src={item.image} alt={item.title} className="cartItemImage" />
            <div className="itemInfo">
              <span>{item.title}</span>
              <span className="itemPrice">{item.price}</span>
            </div>
            <button className="removeButton">
            <ion-icon name="close-outline"></ion-icon>
              </button>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Cart;
