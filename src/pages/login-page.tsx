import React from 'react'

function LoginPage() {
  return (
    <div>
     <h1>Login Page</h1>
     <input
     type="text"
     placeholder='Username'
     />
     <input
     type='password'
     placeholder='Password'
     />
     <button> Login</button>
    </div>
  )
}

export default LoginPage