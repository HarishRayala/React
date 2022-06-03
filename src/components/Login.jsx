import React, { useContext } from 'react'
import { Auth } from '../context/Authcontext'

const Login = () => {
    const {email,setEmail,password,setPassword,token,setToken,wrongdetails,setWrongDetails,ToggleAuth} = useContext(Auth)
  return (
    <div>
        <label htmlFor="">Email:</label>
        <input type="email" onChange={(e)=>{
            setEmail(e.target.value)
        }} />
        <br />
        <label htmlFor="">Password:</label>
        <input type="password" onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        <br />
        <button onClick={()=>{
            ToggleAuth(email,password)
        }} >Login</button>
        {
            wrongdetails && 'Entered wrong details'
        }
    </div>
  )
}

export default Login