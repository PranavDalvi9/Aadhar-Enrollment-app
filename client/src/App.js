import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {Route , Routes} from "react-router-dom"
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AddUserData from './Components/AddUserData/AddUserData';

function App() {
  return (
    <div className="App">
     {/* <Home/> */}

     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<AdminLogin/>} />
      <Route path='/add_adhar' element={<AddUserData/>}/>
     </Routes>
     {/* <Login/> */}
    </div>
  );
}

export default App;
