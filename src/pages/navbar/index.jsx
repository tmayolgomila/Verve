import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export const Navbar = ({ cartItems }) => {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if(x){
            if (x.className === "topnav") {
                x.className += " responsive";
              } else {
                x.className = "topnav";
              }
        }
      }
  return (

    <div className="topnav" id='myTopnav'>
    <Link to='/' id="tituloVerve">VERVE</Link>
    <Link to='/women' onClick={myFunction}>Women</Link>
    <Link to='/men' onClick={myFunction}>Men</Link>
    <Link to='/caps' onClick={myFunction}>Caps</Link>
    <Link to='/handbags' onClick={myFunction}>Handbags</Link>
    <Link to='/gifts' onClick={myFunction}>Gifts</Link>
    <Link to='/discover' onClick={myFunction}>Discover</Link>

    <a className='icon' onClick={myFunction}>
      <i id="iconoMenu" className="fa fa-bars"></i>
    </a>
    
    <Link to='/shoppingCart' id="shoppingCart" onClick={myFunction}>

      <ion-icon name="cart-outline"></ion-icon>

      <div className='countContainer'>
        <span className="cartItemCount">{cartItems.length}</span>
      </div>

    </Link>
  </div>
  
  )
}





