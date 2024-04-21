// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//import DestinationScreen from './DestinationScreen'
import SignUpScreen from './SignUpScreen'
import ChallengeScreen from './ChallengeScreen'
import HomeScreen from './HomeScreen'
import DestinationScreen from './DestinationScreen'
import { Route, Routes } from "react-router-dom";
import LeaderScreen from './LeaderScreen'
import PushNotificationComponent from './Components/notifs'
import React, { createContext, useState } from 'react';

export const Namecontext = createContext({
  points: "0",
  setPoints:  () => {},
  firstName: "Melody",
  setFirstName: () => {}
});

function App() {
  // const [count, setCount] = useState(0)
  
  const [firstName, setFirstName] = useState('');
  const [points, setPoints] = useState('');
  const userdata = {firstName, setFirstName, points, setPoints}

  return (
    <Namecontext.Provider value={userdata}>
      <Routes>
          <Route path="/" element={<SignUpScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="leaderboard" element={<LeaderScreen />} />
          <Route path="map" element={<DestinationScreen />} />
          <Route path="challenge" element={<ChallengeScreen />} />
      </Routes>
    <PushNotificationComponent />

    </Namecontext.Provider>
  )
}

export default App
