
import React from 'react'
import Login, { LoginMode } from '../../components/Login/Login'

const LoginPage = () => {
  return (
    <div>
        <Login loginMode={LoginMode.FULLPAGE}/>
    </div>
  )
}

export default LoginPage