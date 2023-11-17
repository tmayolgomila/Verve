
import React from "react";
import "./styles.css";

const Cart = ({ cartItems, setCartItems }) => {
  
    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart)
    }

    const countItemUnits = (itemId) => {
      return cartItems.reduce ((count, item) => (item.id === itemId ? count + 1 : count), 0 )
    }
    
  return (
    <div className="cartContainer">
    <h1>Shopping Cart</h1>
    <ul className="cartList">
      {cartItems.reduce((uniqueItems, item) => {
        // Verificar si el artículo ya está en la lista única
        if (!uniqueItems.find((uniqueItem) => uniqueItem.id === item.id)) {
          uniqueItems.push(item);
        }
        return uniqueItems;
      }, []).map((uniqueItem) => (
        <li key={uniqueItem.id}>
          <div className="cartItemContent">
            <img src={uniqueItem.image} alt={uniqueItem.title} className="cartItemImage" />
            <div className="itemInfo">
              <span>{uniqueItem.title}</span>
              <span className="itemPrice">
                {`${uniqueItem.price} x ${countItemUnits(uniqueItem.id)}`}
              </span>
            </div>
            <button
              className="removeButton"
              onClick={() => handleRemoveItem(uniqueItem.id)}
            >
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
