import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='navbar' >
        <button onClick={()=>{
            navigate('/')
        }} >Home</button>
        <button onClick={()=>{

        }}>About</button>
        <button onClick={()=>{
            navigate('/products')
        }}>Products</button>
    </div>
  )
}

export default Navbar