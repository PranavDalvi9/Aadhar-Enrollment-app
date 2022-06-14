import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./AddUserData.css"
import { logout } from "../../Redux/LoginUser/Action"

export default function AddUserData() {
    const dispatch = useDispatch()
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Home_Address, setHomeAddress] = useState("")

    const handleSubmit = () => {
        const data = {
            first_name,
            last_name,
            email,
            password,
            Home_Address
        }
        axios.post("https://adhar-enrollment-pranav-dalvi.herokuapp.com/adhar", data).then((res) => {
            alert("Details Added Successfully");
            setFirstName(""); setLastName(""); setEmail(""); setPassword(""); setHomeAddress("")
        }).catch((err) => alert("Failed to add"))
    }


    return (
        <div className='AddUserDataDiv'>
            <p><button className='LogoutBtn' onClick={() => dispatch(logout())}>Logout</button></p>
            <h1>Adhar Information</h1>
            <div>
                <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' /> <br /><br />
                <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' /><br /><br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /><br /><br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /><br /><br />
                <input type="text" value={Home_Address} onChange={(e) => setHomeAddress(e.target.value)} placeholder='Home Address' /><br /><br />
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>

        </div>
    )
}
