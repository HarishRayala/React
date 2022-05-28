import React, { useState } from 'react'

const Todo = ({addItem}) => {
    const[item,setItem] = useState("");
  return (
    <div className='box1' >
        <h1>TodoApp</h1>
        <input type="text" placeholder='Text here and add' onChange={(e)=>{
            setItem(e.target.value)
        }} />
        <button onClick={()=>{
            addItem(item)
        }} >+</button>
    </div>
  )
}

export default Todo