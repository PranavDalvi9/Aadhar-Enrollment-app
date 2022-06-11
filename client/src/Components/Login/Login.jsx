import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className='LoginDiv'>
      <p>Login</p>
      <div>
        <input type="text" placeholder='Email Address' /><br /><br />
        <input type="text" placeholder='Password' /><br /><br />
        <button>Login</button>
      </div>
    </div>
  )
}
