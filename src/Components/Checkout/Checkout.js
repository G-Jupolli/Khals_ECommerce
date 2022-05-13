import React from 'react'
import { useStateValue } from '../../StateProvider/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';

import './Checkout.css';

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">

      <div className="checkout__left">

        <div className="checkout__title">
          <h3>Hello, {user?.email}</h3>
          <h2>Your shopping basket</h2>
        </div>

        {basket.map((item) => (
          <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}

      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout