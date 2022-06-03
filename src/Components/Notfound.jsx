import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate=useNavigate()
  return (
    <div>Notfound
        <button onClick={()=>{
            navigate("/")
        }}>Go to Home</button>
        <img src="https://previews.123rf.com/images/arcady31/arcady311303/arcady31130300032/18519959-vector-oops-symbol.jpg" alt="" />
    </div>
  )
}

export default Notfound;