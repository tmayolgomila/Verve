import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export const Footer = () => {
  return (
    <>
    <div className='footer'>
    <Link className='linkFooter' ><li>NEWSLETTER</li></Link>  
    <Link className='linkFooter' ><li>THE COMPANY</li></Link> 
    <Link className='linkFooter' ><li>WORK WITH US</li></Link> 
    <Link className='linkFooter' ><li>BOUTIQUES</li></Link> 
    <Link className='linkFooter' ><li>CONTACT US</li></Link> 
   </div>
   <hr/>
   <br/>
   <i className="fa fa-copyright"></i> 2023 VERVE
   <br/>
   </>
  )
}
