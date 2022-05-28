import React, { useState } from 'react'
import { TodoItem } from '../../../../../Day-2 Assignment/Simple-Todo/react-simple-todo/src/Components/TodoItem';
import Todo from './Todo';

const Todolist = () => {
    const [list,setList]= useState([]);
    const addItem=(get)=>{
        setList((prev)=>{
            if(get === "") return prev
            else{
                return [...prev,get]
            }
        })
    }
  return (
    <div>
        <Todo addItem={addItem} />
        {list.map((e,i)=>{
            return <div key={i} className='box2'>
                <ul>
                    <li><TodoItem item={e}/></li>
                </ul>
                </div>
        })}

    </div>
  )
}

export default Todolist