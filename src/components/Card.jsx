import React from 'react'

function Card({date,logo,title,subhead,device,color}) {
  return (
    <div className={color}>
        <div className='box'>
            <h3 style={{fontWeight:"bold"}}>{date}</h3>
            <img src={logo} alt="image" className='img' />
        </div>
        <div>
            <button style={{backgroundColor:"black" ,color:"white", border:"none",height:"50px"}}>Case Study</button>
            <h1>{title}<br />
            {subhead}</h1>
        </div>
        <h4>{device}</h4>
    </div>
  )
}

export default Card