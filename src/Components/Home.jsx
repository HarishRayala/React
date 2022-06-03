import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home
        <br />
        <span>
            <Link to='/products'>Products</Link>
        </span>
    </div>
  )
}

export default Home