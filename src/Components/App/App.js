import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from '../Home/Home';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header';
import Login from '../Login/Login';


function App() {
  return (
    <Router>
      <div className="app">

        

        <Routes>

          <Route path='/login' element={<Login />} />

          <Route path='/checkout' element={<><Header /> <Checkout /></>} />

          <Route path='/' element={<><Header /> <Home /></>} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
