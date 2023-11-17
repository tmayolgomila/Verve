
import React from "react";
import "./styles.css";

const Cart = ({ cartItems, setCartItems }) => {
  
    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart)
    }
    
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
            <button className="removeButton" onClick={()=>handleRemoveItem(item.id)}>
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
