import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import DesktopNav from './Components/DesktopNav'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DesktopNav/>
    </div>
  )
}

export default App
