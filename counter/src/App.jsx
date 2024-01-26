import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function addValue(){
    setCounter(counter + 1)
  }

  function removeValue(){
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course - Counter</h1>
        <h2>{counter}</h2>

      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
