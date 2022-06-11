import React from 'react'
import { useState } from 'react'
// import "./Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {

const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleAdd = () => {
    const result = {
      email,
      password
    }
    // axios.post("http://localhost:2348/admin/login", result).then((res) => console.log("resss", res.data))
navigate("/add_adhar")
  }


  return (
    <div className='LoginDiv'>
      <p>Admin Login</p>
      <div>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' /><br /><br />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /><br /><br />
        <button onClick={() => handleAdd()}>Login</button>
      </div>
    </div>
  )
}
