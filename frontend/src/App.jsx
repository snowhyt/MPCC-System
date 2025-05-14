
import './App.css'
import { Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";


import {Toaster} from "react-hot-toast"




function App() {
  

  return (
  
    <>
    <Toaster position='top-center' reverseOrder={false} />
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      

    
    </Routes>
    
    </>
  
     
  )
}


export default App
