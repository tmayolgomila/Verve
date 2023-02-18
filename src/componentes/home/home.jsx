import React from 'react'
import './home.css'
import video from './VideoVerve.mp4'
import { Link} from 'react-router-dom'

export const Home = () => {

  return (
    <div >
        <div className='container'>
      <div>
        <hr/>
        <h4>BRINGING VERVE TO YOUR WARDROBE</h4>
        <hr/>
      </div>
      <div className="tendencias">
        <Link id="trends">New Arrrivals</Link>
        <Link id="trends">Season 23</Link>
        <Link id="trends">Our Selection</Link>
      </div>

      <video id="videoPresentacion" src={video} controls loop></video>

      <div className='divImgPortada'>
        <img id="imagenPortada" src="https://images.pexels.com/photos/5273678/pexels-photo-5273678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen"/>
        <h1 className="tituloFoto">NEW ARRIVALS</h1>
        <button id="botonFoto">SHOP NOW</button>
       
      </div>
      <div className='divImgPortada'>
        <img id="imagenPortada" src="https://images.pexels.com/photos/5836319/pexels-photo-5836319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen"/>
        <h1 className="tituloFoto">OUR COLLECTION</h1>
        <button id="botonFoto">FOR WOMEN</button>
      </div>
      <div className='divImgPortada'>
        <img id="imagenPortada" src="https://images.pexels.com/photos/8484112/pexels-photo-8484112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen"/>
        <h1 className="tituloFoto">GIFT SHOP</h1>
        <button id="botonFoto">CHOOSE YOURS</button>
      </div>
      <div className='divImgPortada'>
        <img id="imagenPortada" src="https://images.pexels.com/photos/5840462/pexels-photo-5840462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen"/>
        <h1 className="tituloFoto">OUR COLLECTION</h1>
        <button id="botonFoto">FOR MEN</button>
      </div>
      <div className='divImgPortada'>
        <img id="imagenPortada" src="https://images.pexels.com/photos/8427389/pexels-photo-8427389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Imagen"/>
        <h1 className="tituloFoto">OUR CAPS & HATS</h1>
        <button id="botonFoto">SHOP NOW</button>
      </div>
      <div className='divImgPortada'>
        <img id="imagenPortada" src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=8" alt="Imagen"/>
        <h1 className="tituloFoto">OUR BAGS</h1>
        <button id="botonFoto">SHOP NOW</button>
      </div>
      <hr/>
      </div>
    </div>
  )
}
