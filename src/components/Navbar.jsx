import React, { useContext } from 'react'
import { Auth } from '../context/Authcontext'

const Navbar = () => {
    const {email,setEmail,password,setPassword,token,setToken,wrongdetails,setWrongDetails,ToggleAuth,isAuth,setisAuth} = useContext(Auth)
  return (
    <div>
        <button onClick={()=>{
            isAuth ? setisAuth(false) : ToggleAuth(email,password)
        }}>{ isAuth ? 'logout' : 'login'}</button>
    </div>
  )
}

export default Navbar