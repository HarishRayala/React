import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Timer from './Components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1><Timer/></h1>
    </div>
  )
}

export default App
