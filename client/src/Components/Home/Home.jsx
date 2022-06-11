import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Home.css"
import {logout} from "../../Redux/LoginUser/Action"

export default function Home() {
  const dispatch = useDispatch()
  const data = useSelector((store) => store.data)
  console.log("datata" , data.first_name, data.Adhar_Number)
  return (
    <div className='HomeDiv'>
      {/* <p>Home</p> */}
      <div>
      <p><button className='LogoutBtn' onClick={() => dispatch(logout()) }>Logout</button></p>
        <p>Welcome {data.first_name}</p>
        <p>Adhar Number</p>
        <p>{data.Adhar_Number}</p>
      </div>
    </div>
  )
}
