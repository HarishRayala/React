import { createContext, useState } from "react";
import axios from 'axios'

const Auth=createContext()
const AuthContextProvider=({children})=>{
    const [isAuth,setisAuth]=useState(false)
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [token,setToken] = useState("")
    const [wrongdetails,setWrongDetails]= useState(false)
    function ToggleAuth (email,password){
        let body={email,password}
        axios.post("https://reqres.in/api/login",body).then((res)=>{
            console.log(res)
            setToken(res.data.token)
            setisAuth(true)
            setWrongDetails(false)
        }).catch((res)=>{
            console.log(res)
            setWrongDetails(true)

        })
    }
    return <Auth.Provider value={{email,setEmail,password,setPassword,token,setToken,wrongdetails,setWrongDetails,ToggleAuth,isAuth,setisAuth}} >
        {children}
    </Auth.Provider>
}
export  {Auth, AuthContextProvider}