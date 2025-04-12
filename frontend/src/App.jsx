
import React from "react";
import './App.css'
import { Routes, Route} from 'react-router-dom';


import Login from "./pages/Login.jsx";
// import Signup from "./pages/Signup.jsx";
// import Dashboard from "./pages/Dashboard.jsx";





function App() {
  

  return (
  
    <div>
 
    <Routes>
      
      <Route path="/login" element={<Login/>}/>
  
    
    </Routes>
    
    </div>
  
     
  )
}


export default App;
