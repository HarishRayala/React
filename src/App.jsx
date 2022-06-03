import { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { Auth } from './context/Authcontext'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)
  const {isAuth,setisAuth}= useContext(Auth)
  return (
    <div className="App">
     <Navbar/>
     {
       isAuth ? <Profile/>: <Login/>
     }

    </div>
  )
}

export default App
