import React from "react"
import GalleryCard from "../../components/galleryCard"
import "./styles.css"
import Impro1 from "../../img/impro1.jpeg"
import Impro3 from "../../img/impro3.webp"


 const Men = ({ addToCart }) => {

  return (
    <div className="galleryContainer">
      <div className="gallery">
          <GalleryCard galleryImg={Impro1} galleryTitle="Men" galleryButton="Add to cart" onClick={()=>addToCart({id: 13, title: "Men", price:59.99, image: Impro1})}/>
          <GalleryCard galleryImg={Impro3} galleryTitle="screen cleaner title" galleryButton="Add to cart" onClick={()=>addToCart({id: 14, title: "screen cleaner title", price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="single line title" galleryButton="Add to cart" onClick={()=>addToCart({id: 15, title: "single line title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="tanks title" galleryButton="Add to cart" onClick={()=>addToCart({id: 16, title: "tanks title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="user captain" galleryButton="Add to cart" onClick={()=>addToCart({id: 17, title: "user captain" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="triangle title" galleryButton="Add to cart" onClick={()=>addToCart({id: 18, title: "triangle title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="gallery title" galleryButton="Add to cart"onClick={()=>addToCart({id: 19, title: "gallery title" , price:59.99, image: Impro1})}  />
          <GalleryCard galleryImg={Impro3} galleryTitle="user worker title" galleryButton="Add to cart" onClick={()=>addToCart({id: 20, title: "user worker title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="user captain" galleryButton="Add to cart" onClick={()=>addToCart({id: 21, title: "user captain" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="triangle title" galleryButton="Add to cart" onClick={()=>addToCart({id: 22, title: "triangle title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro1} galleryTitle="gallery title" galleryButton="Add to cart" onClick={()=>addToCart({id: 23, title: "gallery title" , price:59.99, image: Impro1})} />
          <GalleryCard galleryImg={Impro3} galleryTitle="user worker title" galleryButton="Add to cart" onClick={()=>addToCart({id: 24, title: "user worker title" , price:59.99, image: Impro1})} />
      </div>
    </div>

  )
}
export default Men;