import React,{useState} from 'react'


const Todo = ({addItem}) => {
    const [item, setItem] = useState("");

  return (
    <div>
        <h1>Todo App</h1>
        <input type="text" placeholder='Text here and add' onChange={(e)=>{
            setItem(e.target.value)
        }} />
        <button onClick={() => {
            addItem(item)
        }}>Add</button>
        <div>

        </div>
    </div>
  )
}

export default Todo