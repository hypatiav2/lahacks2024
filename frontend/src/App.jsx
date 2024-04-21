// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//import DestinationScreen from './DestinationScreen'
import SignUpScreen from './SignUpScreen'
import HomeScreen from './HomeScreen'
import { Route, Routes } from "react-router-dom";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
				<Route path="/" element={<SignUpScreen />} />
				<Route path="home" element={<HomeScreen />} />
    </Routes>
    </>
  )
}

export default App
