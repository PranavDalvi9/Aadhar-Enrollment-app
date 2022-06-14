import React from 'react'
import { useState } from 'react'
// import "./Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adminSuccess, adminFail } from "../../Redux/LoginUser/Action"

export default function AdminLogin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleAdd = () => {
    const result = {
      email,
      password
    }
    axios.post("https://adhar-enrollment-pranav-dalvi.herokuapp.com/admin/login", result).then((res) => { dispatch(adminSuccess(res.data)); navigate("/add_adhar") }).catch((err) => { dispatch(adminFail()); alert("Wrong Credential") })
    // navigate("/add_adhar")
  }


  return (
    <div className='LoginDiv'>
      <p>Admin Login</p>
      <div>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' /><br /><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /><br /><br />
        <button onClick={() => handleAdd()}>Login</button>
        <p><button className='RegBtn' onClick={() => navigate("/")}>User Login</button></p>

      </div>
    </div>
  )
}
