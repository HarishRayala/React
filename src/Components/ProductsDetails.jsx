import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductsDetails = () => {
    const [data,setData]=useState({})
    const {id}= useParams();
    // fetching data from server
    useEffect(()=>{
        axios.get(` http://localhost:3004/products/${id}`).then((res)=>{
        console.log(res)
        setData(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>ProductsDetails{id}
        <h1>Name:{data.name}</h1>
        <p>Price:{data.price}</p>
    </div>
  )
}

export default ProductsDetails