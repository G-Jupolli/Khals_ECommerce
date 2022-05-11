import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../Home/Home';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header';


function App() {
  return (
    <Router>
      <div className="app">

        <Header />

        <Routes>
          <Route path='/checkout' element={<Checkout />} />

          <Route path='/' element={<Home />} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
