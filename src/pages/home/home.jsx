import React from 'react'
import './home.css'
import video from './VideoVerve.mp4'
import ProductCover from '../../components/productCover.jsx'
import { Link} from 'react-router-dom'
import chair from '../../img/chair.jpeg'
import chess from '../../img/chess.webp'
import handkerchief from '../../img/handkerchief.webp'
import sandChair from '../../img/sandChair.jpeg'
import twins from '../../img/twins.webp'
import verveBag from '../../img/verveBag.webp'


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

      <ProductCover photo={chair} titleText="NEW ARRIVALS" titleButton="SHOP NOW"/>

      <ProductCover photo={sandChair} titleText="OUR COLLECTION" titleButton="FOR WOMEN"/>

      <ProductCover photo={handkerchief} titleText="GIFT SHOP" titleButton="CHOOSE YOURS"/>

      <ProductCover photo={twins} titleText="OUR COLLECTION" titleButton="FOR MEN"/>

      <ProductCover photo={chess} titleText="OUR CAPS & HATS" titleButton="SHOP NOW"/>

      <ProductCover photo={verveBag} titleText="OUR BAGS" titleButton="SHOP NOW"/>

      <hr/>
      </div>
    </div>
  )
}
