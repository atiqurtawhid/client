import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Resister/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Header from "./components/Header/Header"
const App=()=>{
	return(
		
		<div>
		
     <Header/>
      
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/profile" element={<Profile/>} />
       <Route path="*" element={<NotFound/>} />
       </Routes>
     
		
		
		
		
		
		</div>
		
		
		)
}

export default App;
