import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">BadBank</Link>
        <Link to="/createaccount">Create Account</Link>
        <Link to="/login">Login</Link>
        <Link to="/deposit">Deposit</Link>
        <Link to="/withdraw">Withdraw</Link>
        <Link to="/balance">Balance</Link>
        <Link to="/alldata">All Data</Link>
    </div>
  )
}

export default Navbar