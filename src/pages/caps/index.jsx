import React from "react"
import GalleryCard from "../../components/galleryCard"
import "./styles.css"
import Impro1 from "../../img/impro1.jpeg"
import Impro3 from "../../img/impro3.webp"


 const Caps = ({ addToCart }) => {

  return (
    <div className="galleryContainer">
      <div className="gallery">
          <GalleryCard galleryImg={Impro1} galleryTitle="Caps" galleryButton="Add to cart" onClick={()=>addToCart({id: 61, title: "Caps", price:59.99, image: Impro1})}/>
          <GalleryCard galleryImg={Impro3} galleryTitle="screen cleaner title" galleryButton="Add to cart" onClick={()=>addToCart({id: 62, title: "screen cleaner title", price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="single line title" galleryButton="Add to cart" onClick={()=>addToCart({id: 63, title: "single line title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="tanks title" galleryButton="Add to cart" onClick={()=>addToCart({id: 64, title: "tanks title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="user captain" galleryButton="Add to cart" onClick={()=>addToCart({id: 65, title: "user captain" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="triangle title" galleryButton="Add to cart" onClick={()=>addToCart({id: 66, title: "triangle title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="gallery title" galleryButton="Add to cart"onClick={()=>addToCart({id: 67, title: "gallery title" , price:59.99, image: Impro1})}  />
          <GalleryCard galleryImg={Impro3} galleryTitle="user worker title" galleryButton="Add to cart" onClick={()=>addToCart({id: 68, title: "user worker title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="user captain" galleryButton="Add to cart" onClick={()=>addToCart({id: 69, title: "user captain" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="triangle title" galleryButton="Add to cart" onClick={()=>addToCart({id: 70, title: "triangle title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="gallery title" galleryButton="Add to cart" onClick={()=>addToCart({id: 71, title: "gallery title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="user worker title" galleryButton="Add to cart" onClick={()=>addToCart({id: 72, title: "user worker title" , price:59.99, image: Impro1})} />
      </div>
    </div>

  )
}
export default Caps;