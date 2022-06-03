import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Products from './Components/Products'
import Navbar from './Components/Navbar'
import ProductsDetails from './Components/ProductsDetails'
import Notfound from './Components/Notfound'

function App() {
  const [count, setCount] = useState(0)

  //params :id,--> to indicate params
  return (
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductsDetails/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  )
}

export default App
