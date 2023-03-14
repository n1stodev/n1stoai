import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import STT from './Components/STT/STT'
import TTS from './Components/TTS/TTS'
import Footer from './Components/Footer/Footer'

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
        component = <Home />
        break;
    case "/stt":
        component = <STT />
        break;
    case "/tts":
        component = <TTS />
        break;
  }
  return (
    <div className='App'>
        <Navbar />
        { component }
        <Footer />
    </div>
  )
}

export default App