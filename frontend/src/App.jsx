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
import Upload from './Components/PhotoUpload'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
				<Route path="/" element={<SignUpScreen />} />
				<Route path="home" element={<HomeScreen />} />
        <Route path="leaderboard" element={<LeaderScreen />} />
        <Route path="map" element={<DestinationScreen />} />
        <Route path="challenge" element={<ChallengeScreen />} />
    </Routes>

    </>
  )
}

export default App
