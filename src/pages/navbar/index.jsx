import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
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
    <Link to='#' onClick={myFunction}>Men</Link>
    <Link to='#' onClick={myFunction}>Caps</Link>
    <Link to='#' onClick={myFunction}>Handbags</Link>
    <Link to='#' onClick={myFunction}>Gifts</Link>
    <Link to='#' onClick={myFunction}>Discover</Link>
    <a className='icon' onClick={myFunction}>
      <i id="iconoMenu" className="fa fa-bars"></i>
    </a>
    <Link to='/shoppingCart' id="shoppingCart" onClick={myFunction}><ion-icon name="cart-outline"></ion-icon></Link>
  </div>
  )
}
