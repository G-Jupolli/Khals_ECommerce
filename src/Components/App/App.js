import './App.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from '../Home/Home';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header';
import Login from '../Login/Login';

import { auth } from '../../Util/firebase';
import { useStateValue } from '../../StateProvider/StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          payload: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          payload: null,
        })
      }

    })
    
  }, [])

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
