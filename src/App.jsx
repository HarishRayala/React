import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card date={"21/05/2022"} logo={"https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"} title={"Amazon Gift"} subhead={"Pay"} device={"Desktop-Mobile"} color={"amazon"} />
      <Card date={"21/05/2022"} logo={"https://www.transparentpng.com/thumb/apple-logo/d9RxbG-apple-logo-free-png.png"} title={"Apple Gift"} subhead={"Payment"} device={"MacOS-Mobile"} color={"apple"} />
    </div>
  )
}

export default App
