import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)


  const generatePassword = useCallback(() => {
    let pass = ''
    let string = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) string += "0123456789"
    if(charAllowed) string += "!@#$%^&*()_-+"

    for(let i = 1; i < length; i++){
      const char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPassowordToClip = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()

  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  return (
    <div className= "container">
      <h1>Password Generator</h1>

      <div className='container-textInput-clipBoard'>
        <input
          type='text'
          value={password}
          readOnly
          ref={passwordRef}
          className='textInput'
        />
        <button onClick={copyPassowordToClip} className='btn-clipBoard'>copy</button>
      </div>
      <div className='container-ranger-numbers-char-inputs'>
        <div className='box-input-label-flex'>
          <input 
            type='range'
            value={length} 
            min={8} max={100} 
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor='Length'>Length: {length}</label>
        </div>

        <div className='box-input-label-flex'>
          <input 
            type="checkbox" 
            name="" 
            defaultChecked={numberAllowed}
            onChange={() => { setNumberAllowed((prev) => !prev)}}
          />
          <label htmlFor="Numbers">Numbers</label>
        </div>

        <div className='box-input-label-flex'>
          <input 
            type="checkbox" 
            name="" 
            defaultChecked={charAllowed}
            onChange={() => {setCharAllowed((prev) => !prev)}}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>

    </div>
  )
}
export default App
