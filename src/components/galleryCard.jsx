import React from 'react'
import '../styles/galleryCard.css'
import { toast } from 'sonner'

const GalleryCard = ({galleryImg,galleryTitle, galleryButton, onClick }) => {
  const handleClick = () => {
    toast('Added to your cart')
    onClick();
  };

  return (
    <div className='containerGalleryCard'>
        <img className='imgGalleryCard' src={galleryImg} alt="Img"/>
        <h4 className='titleGalleryCard'> {galleryTitle} </h4>
        <button className='buttonGalleryCard' onClick={handleClick}> {galleryButton} </button>   

    </div>
  )
}

export default GalleryCard;
