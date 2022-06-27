import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Login = () => {
    const user = useContext(UserContext);
  return (
    <div>
        <h3>Login</h3>
        {JSON.stringify(user)}
    </div>
  )
}

export default Login