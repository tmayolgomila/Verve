import React from "react"
import GalleryCard from "../../components/galleryCard"
import "./styles.css"
import Impro1 from "../../img/impro1.jpeg"
import Impro3 from "../../img/impro3.webp"


 const Gifts = ({ addToCart }) => {

  return (
    <div className="galleryContainer">
      <div className="gallery">
          <GalleryCard galleryImg={Impro1} galleryTitle="Gifts" galleryButton="Add to cart" onClick={()=>addToCart({id: 37, title: "oneTitle", price:59.99, image: Impro1})}/>
          <GalleryCard galleryImg={Impro3} galleryTitle="screen cleaner title" galleryButton="Add to cart" onClick={()=>addToCart({id: 38, title: "screen cleaner title", price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="single line title" galleryButton="Add to cart" onClick={()=>addToCart({id: 39, title: "single line title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="tanks title" galleryButton="Add to cart" onClick={()=>addToCart({id: 40, title: "tanks title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="user captain" galleryButton="Add to cart" onClick={()=>addToCart({id: 41, title: "user captain" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="triangle title" galleryButton="Add to cart" onClick={()=>addToCart({id: 42, title: "triangle title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="gallery title" galleryButton="Add to cart"onClick={()=>addToCart({id: 43, title: "gallery title" , price:59.99, image: Impro1})}  />
          <GalleryCard galleryImg={Impro3} galleryTitle="user worker title" galleryButton="Add to cart" onClick={()=>addToCart({id: 44, title: "user worker title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="user captain" galleryButton="Add to cart" onClick={()=>addToCart({id: 45, title: "user captain" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="triangle title" galleryButton="Add to cart" onClick={()=>addToCart({id: 46, title: "triangle title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="gallery title" galleryButton="Add to cart" onClick={()=>addToCart({id: 47, title: "gallery title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="user worker title" galleryButton="Add to cart" onClick={()=>addToCart({id: 48, title: "user worker title" , price:59.99, image: Impro1})} />
      </div>
    </div>

  )
}
export default Gifts;