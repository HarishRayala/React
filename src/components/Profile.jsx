import React, { useContext } from 'react'
import { Auth } from '../context/Authcontext'

const Profile = () => {
    const {email,setEmail,password,setPassword,token,setToken,wrongdetails,setWrongDetails,ToggleAuth,isAuth,setisAuth} = useContext(Auth)
  return (
    <div>
        {
            token
        }
        
    </div>
  )
}

export default Profile