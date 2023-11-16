import React from "react"
import GalleryCard from "../../components/galleryCard"
import "./styles.css"
import Impro1 from "../../img/impro1.jpeg"
import Impro3 from "../../img/impro3.webp"


 const Women = ({ addToCart }) => {

  return (
    <div className="galleryContainer">
      <div className="gallery">
          <GalleryCard galleryImg={Impro1} galleryTitle="one Title" galleryButton="Add to cart" onClick={()=>addToCart({id: 1, title: "oneTitle", price:59.99, image: Impro1})}/>
          <GalleryCard galleryImg={Impro3} galleryTitle="screen cleaner title" galleryButton="Add to cart" onClick={()=>addToCart({id: 2, title: "screen cleaner title", price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="single line title" galleryButton="Add to cart" onClick={()=>addToCart({id: 3, title: "single line title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="tanks title" galleryButton="Add to cart" onClick={()=>addToCart({id: 4, title: "tanks title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="user captain" galleryButton="Add to cart" onClick={()=>addToCart({id: 5, title: "user captain" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="triangle title" galleryButton="Add to cart" onClick={()=>addToCart({id: 6, title: "triangle title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="gallery title" galleryButton="Add to cart"onClick={()=>addToCart({id: 7, title: "gallery title" , price:59.99, image: Impro1})}  />
          <GalleryCard galleryImg={Impro3} galleryTitle="user worker title" galleryButton="Add to cart" onClick={()=>addToCart({id: 8, title: "user worker title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="user captain" galleryButton="Add to cart" onClick={()=>addToCart({id: 9, title: "user captain" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="triangle title" galleryButton="Add to cart" onClick={()=>addToCart({id: 10, title: "triangle title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="gallery title" galleryButton="Add to cart" onClick={()=>addToCart({id: 11, title: "gallery title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="user worker title" galleryButton="Add to cart" onClick={()=>addToCart({id: 12, title: "user worker title" , price:59.99, image: Impro1})} />
      </div>
    </div>

  )
}
export default Women;