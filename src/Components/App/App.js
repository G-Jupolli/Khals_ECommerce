import './App.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../Home/Home';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Payment from '../Payment/Payment'

import { auth } from '../../Util/firebase';

import { Stripe } from '../../Util/Stripe';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { useStateValue } from '../../StateProvider/StateProvider';

const promise = loadStripe(Stripe.key);

function App() {
  const [dispatch] = useStateValue();

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

          <Route path='/payment' element={
            <><Header /> <Elements stripe={promise} ><Payment /></Elements></>
          } />

          <Route path='/' element={<><Header /> <Home /></>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
