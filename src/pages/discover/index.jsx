import React from "react"
import GalleryCard from "../../components/galleryCard"
import "./styles.css"
import Impro1 from "../../img/impro1.jpeg"
import Impro3 from "../../img/impro3.webp"


 const Discover = ({ addToCart }) => {

  return (
    <div className="galleryContainer">
      <div className="gallery">
          <GalleryCard galleryImg={Impro1} galleryTitle="discover" galleryButton="Add to cart" onClick={()=>addToCart({id: 49, title: "oneTitle", price:59.99, image: Impro1})}/>
          <GalleryCard galleryImg={Impro3} galleryTitle="screen cleaner title" galleryButton="Add to cart" onClick={()=>addToCart({id: 50, title: "screen cleaner title", price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="single line title" galleryButton="Add to cart" onClick={()=>addToCart({id: 51, title: "single line title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="tanks title" galleryButton="Add to cart" onClick={()=>addToCart({id: 52, title: "tanks title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="user captain" galleryButton="Add to cart" onClick={()=>addToCart({id: 53, title: "user captain" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="triangle title" galleryButton="Add to cart" onClick={()=>addToCart({id: 54, title: "triangle title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="gallery title" galleryButton="Add to cart"onClick={()=>addToCart({id: 55, title: "gallery title" , price:59.99, image: Impro1})}  />
          <GalleryCard galleryImg={Impro3} galleryTitle="user worker title" galleryButton="Add to cart" onClick={()=>addToCart({id: 56, title: "user worker title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="user captain" galleryButton="Add to cart" onClick={()=>addToCart({id: 57, title: "user captain" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="triangle title" galleryButton="Add to cart" onClick={()=>addToCart({id: 58, title: "triangle title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="gallery title" galleryButton="Add to cart" onClick={()=>addToCart({id: 59, title: "gallery title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="user worker title" galleryButton="Add to cart" onClick={()=>addToCart({id: 60, title: "user worker title" , price:59.99, image: Impro1})} />
      </div>
    </div>

  )
}
export default Discover;