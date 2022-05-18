import React from "react";

const Counter = ({initialValue}) => {
  const [count, setCount] = React.useState(initialValue);

  return (
    <div>
      <h1>Counter App </h1>{count %2 ===0 ? (<h1 style={{color:"green"}}>{count}</h1>) : (<h1 style={{color: "red"}}>{count}</h1>)}
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => {
          if(count>0){
              setCount(count-1)
          }
      }}> Decrement </button>
      <button onClick={() =>{
          if(count>0){
              setCount(count*2)
          } 
      }}>Double</button>
    </div>
  );
};
export default Counter
