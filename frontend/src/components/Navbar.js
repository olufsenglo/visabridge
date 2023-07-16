import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Link to="/admin/dashboard">
          Admin
        </Link>
        {' '}
        <Link to="/user/dashboard">
          User
        </Link>
        {' '}
        <Link to="/user/dashboard">
          Log out
        </Link>
        <Link to="/user/dashboard">
          Log in
        </Link>      
    </div>
  )
}

export default Navbar