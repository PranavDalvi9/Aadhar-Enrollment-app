import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {Route , Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
     {/* <Home/> */}

     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     {/* <Login/> */}
    </div>
  );
}

export default App;
