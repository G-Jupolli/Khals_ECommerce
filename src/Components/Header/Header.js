import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Logo from './../../Util/Logo.png';

import { useStateValue } from '../../StateProvider/StateProvider';
import { auth } from '../../Util/firebase';

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header' >

      {/* logo */}
      <Link to='/'>
        <img className='header__logo' src={Logo} alt='Acerune Isle' />
      </Link>

      {/* nav */}
      <div className="header__nav" >

        {/* Login */}
        <Link to={!user && '/login'}>
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionLineOne" >
              Hello, {!user ? "Guest" : user.email.replace('@gmail.com', '')}
            </span>
            <span className="header__optionLinetwo" >
              {
                user ? 'Sign Out' : 'Sign In'
              }
            </span>
          </div>
        </Link>

        {/* Orders */}
        <Link to='/orders' >
          <div className="header__option" >
            <span className="header__optionLineOne" >
              Returns
            </span>
            <span className="header__optionLinetwo" >
              Orders
            </span>
          </div>
        </Link>

        {/* Basket */}
        <Link to='/checkout'>
          <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLinetwo header__basketcount">
            {basket?.length}
          </span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Header