import React,{useState} from 'react'
import Todo from './Todo';
import {TodoItem} from './TodoItem';

export const TodoList = () => {
    const [list, setList] = useState([]);

    const addItem=(get)=>{
        setList(prev=>{
            if(get === "") return prev
            else{
                return[...prev,get]
            }
        })
    }

  return (
    <div>
        <Todo addItem={addItem} />
        { list.map((e,i)=> {
            return <div key={i}> <TodoItem item={e} /> </div> 
        })

        }
    </div>
  )
}
