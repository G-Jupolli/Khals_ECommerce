import React from 'react'

import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import { getBasketTotal } from '../../StateProvider/reducer';

import { useStateValue } from '../../StateProvider/StateProvider';

import './Subtotal.css';

function Subtotal() {
    const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
        <CurrencyFormat 
            renderText={(value) => (
                <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"£"}
        />

        <Link to='/payment' >
            <button className='subtotal__button' >Proceed to Checkout</button>
        </Link>

    </div>
  )
}

export default Subtotal