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
    <Link to='/women'>Women</Link>
    <Link to='#'>Men</Link>
    <Link to='#'>Caps</Link>
    <Link to='#'>Handbags</Link>
    <Link to='#'>Gifts</Link>
    <Link to='#'>Discover</Link>
    <a className='icon' onClick={myFunction}>
      <i id="iconoMenu" className="fa fa-bars"></i>
    </a>
    <Link to='#' id="carroCompra"><ion-icon name="cart-outline"></ion-icon></Link>
  </div>
  )
}
