//import React, { useEffect, useState } from 'react';
import HomeButton from './Components/HomeButton';

import './HomeScreen.css';
import grassHopper from './assets/Group.png'
import grass from "./assets/grass.png"

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#151716',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   message: {
//     fontSize: 24,
//     paddingHorizontal: 25,
//     marginBottom: 180,
//     color: '#FFFFFF',
//   },
//   reshuffleButton: {
//     backgroundColor: '#84C2C9',
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//     borderRadius: 15,
//     paddingVertical: 15,
//     paddingHorizontal: 160,
//   },
//   reshuffleText: {
//     borderColor: '#000',
//     fontSize: 20,
//   },
// });

export default function HomeScreen() {
 /* const [pocketPrompt, setPocketPrompt] = useState('');

  const handleGetPocketPrompt = async () => {
    try {
      const randomPocketPrompt = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/pocketPrompt/get`, { timeout: 20000 });
      setPocketPrompt(randomPocketPrompt.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetPocketPrompt();
  }, []);
  */
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
        <div class="circle">
          <div class='circleContent'>
            <p class="circleText">5</p>
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