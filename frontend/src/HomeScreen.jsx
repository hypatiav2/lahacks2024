//import React, { useEffect, useState } from 'react';
import HomeButton from './Components/HomeButton';
import './HomeScreen.css';
import grassHopper from './assets/Group.png'
import grass from "./assets/grass.png"

export default function HomeScreen() {
  const name = 'melody';

  return (
    <body>
      <div className="container">
        <div className='headline'>
          <img src={grassHopper} alt="Image" className='GrassHopper' />
        </div>
        <h1 className='name'>{name},</h1>
        <h3 className='slogan'>it's time to touch grass.</h3>
        <button className='touchGrass'>begin grass touching</button>
        <h2 className = 'streak'>streak:</h2>
        <div className="circle">
          <div className='circleContent'>
            <p className="circleText">5</p>
            <img src={grass} className='Grass' />
          </div>
        </div>
        <div className="homeButtonContainer"> {/* Open HomeButtonContainer div */}
          <HomeButton description="score: 100" className="HomeButton" />
          <HomeButton description="friends" className="HomeButton" />
        </div> {/* Close HomeButtonContainer div */}
        
      </div>
    </body>
  )
};