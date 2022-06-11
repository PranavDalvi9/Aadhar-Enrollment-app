import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {Route, Routes, Link, Navigate, useNavigate} from "react-router-dom";
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AddUserData from './Components/AddUserData/AddUserData';
import { useSelector } from 'react-redux';

const PrivateRoute = ({isAuthenticate, children}) => {
  return isAuthenticate ? children : <Navigate to={"/"}/> 
}

const PrivateRouteAdmin = ({isAuthAdhar, children}) => {
  return isAuthAdhar ? children : <Navigate to={"/admin"}/> 
}

function App() {

  const navigate = useNavigate()
  // const isAuthenticate = useSelector((store) => store.login.isAuthenticate)
  const isAuthenticate = useSelector((store) => store.isAuth)
  // console.log("isauth user" , isAuthenticate)
  // const isAuthenticate = false;
  const isAuthAdhar = useSelector((store) => store.isAdmin)
  // console.log("isauth admin" , isAuthAdhar)
  // const isAuthAdhar = false;

  return (
    <div className="App">
     {/* <Home/> */}

     <Routes>
      {/* <Route path='/home' element={<Home/>}/> */}
      <Route path='/' element={<Login/>}/>
      <Route path='/admin' element={<AdminLogin/>} />
      {/* <Route path='/add_adhar' element={<AddUserData/>}/> */}


      <Route path='/home' element={
          <PrivateRoute isAuthenticate={isAuthenticate}><Home/></PrivateRoute>
        }></Route>

<Route path='/add_adhar' element={
          <PrivateRouteAdmin isAuthAdhar={isAuthAdhar}><AddUserData/></PrivateRouteAdmin>
        }></Route>


     </Routes>
     {/* <Login/> */}
    </div>
  );
}

export default App;




// email
// "pranav@gmail.com"
// password
// "12345"


// email
// "admin@admin.com"
// password
// "12345"
