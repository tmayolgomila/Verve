import React from 'react'
import '../styles/productCover.css'

const ProductCover = ({photo,titleText, titleButton }) => {
  return (
    <div className='divImgPortada'>
        <img id="imagenPortada" src={photo} alt="Imagen"/>
        <h1 className="tituloFoto"> {titleText} </h1>
        <button id="botonFoto"> {titleButton} </button>       
    </div>
  )
}

export default ProductCover;
