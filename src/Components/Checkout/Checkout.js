import React from 'react'
import { useStateValue } from '../../StateProvider/StateProvider';
import Subtotal from '../Subtotal/Subtotal';

import './Checkout.css';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">

      <div className="checkout__left">

        <div className="checkout__title">
          <h2>Your shopping basket</h2>
        </div>

      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout