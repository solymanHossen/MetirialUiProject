import React, { useState } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Setting from './components/Setting';
import Add from './components/Add';
import Myaccount from './components/Myaccount';
import LogOut from './components/LogOut';


const App = () => {

  return (
   
    <div>
      <BrowserRouter>
      
      <Routes>
     
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/setting' element={<Setting/>} />
        <Route path='/account' element={<Myaccount/>} />
        <Route path='/logout' element={<LogOut/>} />
       
      </Routes>
      <Add/>
      
      </BrowserRouter>
    </div>
   
  );
};

export default App;