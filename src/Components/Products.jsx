import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const navigate=useNavigate()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3004/products').then((res)=>{
        console.log(res)
        setData(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div className='table'>
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((e)=>{
                    return <tr onClick={()=>{
                        navigate(`/products/${e.id}`)
                    }}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Products