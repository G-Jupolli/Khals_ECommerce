import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.css';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { useStateValue } from '../../StateProvider/StateProvider';
import { auth } from '../../Util/firebase';

function Header() {
  const [{ basket, user }] = useStateValue();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header' >

      {/* logo */}
      <Link to='/'>
        <div className="header__logo">LOGO</div>
      </Link>

      {/* Search */}
      <div className="header__search" >
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* nav */}
      <div className="header__nav" >

        {/* Login */}
        <Link to={!user && '/login'}>
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionLineOne" >
              Hello
            </span>
            <span className="header__optionLinetwo" >
              {
                user ? 'Sign Out' : 'Sign In'
              }
            </span>
          </div>
        </Link>

        {/* Orders */}
        <div className="header__option" >
          <span className="header__optionLineOne" >
            Returns
          </span>
          <span className="header__optionLinetwo" >
            Orders
          </span>
        </div>

        {/* Prime */}
        <div className="header__option" >
          <span className="header__optionLineOne" >
            Your
          </span>
          <span className="header__optionLinetwo" >
            Prime
          </span>
        </div>

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