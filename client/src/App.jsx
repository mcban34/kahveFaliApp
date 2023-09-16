import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>        
    </div>
  );
}

export default App;
