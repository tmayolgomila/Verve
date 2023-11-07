import React from 'react'
import '../styles/galleryCard.css'

const GalleryCard = ({galleryImg,galleryTitle, galleryButton }) => {
  return (
    <div className='containerGalleryCard'>
        <img className='imgGalleryCard' src={galleryImg} alt="Img"/>
        <h1 className='titleGalleryCard'> {galleryTitle} </h1>
        <button className='buttonGalleryCard'> {galleryButton} </button>       
    </div>
  )
}

export default GalleryCard;
