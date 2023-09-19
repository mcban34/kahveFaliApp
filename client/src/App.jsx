import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Output from './pages/Output/Output';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/output' element={<Output/>}/>
      </Routes>        
    </div>
  );
}

export default App;
