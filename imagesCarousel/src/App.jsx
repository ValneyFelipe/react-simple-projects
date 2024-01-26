import React, {useState} from 'react'
import './App.css'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import images from './Components/Actions'

function App() {
  const [current, setCurrent] = useState(0)

  function nextPhoto(){
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }
  function prevPhoto(){
    setCurrent(current === 0 ? images.length - 1: current - 1)
  }

  return (
    <div className='carousel-container'>
      <h1 className='title'>Images Carousel</h1>
      <div className='imgs-arrows--container'>
        <FaArrowLeft size={32} className='ArrowLeft' onClick={prevPhoto}/>
        <img src={images[current].src}  alt={images[current].alt}/>
        <FaArrowRight size={32} className='ArrowRight' onClick={nextPhoto}/>

      </div>
      
      <div className='btns-container'>
        <button onClick={prevPhoto}>prevPhoto</button>
        <button onClick={nextPhoto}>nextPhoto</button>
      </div>
    </div>
  )
}

export default App
