import React from 'react'
import { useStateValue } from '../../StateProvider/StateProvider';

import Book1 from './../../Util/products/images/Book1.jpg';
import Book2 from './../../Util/products/images/Book2.jpg';
import Book3 from './../../Util/products/images/Book3.jpg';
import FOAFacemask from './../../Util/products/images/FOAFacemask.jpg';
import AIFacemask from './../../Util/products/images/AIFacemask.jpg';
import EbonsFang from './../../Util/products/images/EbonsFang.jpg';
import FOATeeShirt from './../../Util/products/images/FOATeeShirt.jpg';
import FOAHoodie from './../../Util/products/images/FOAHoodie.jpg';
import FOACap from './../../Util/products/images/FOACap.jpg';

import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating}) {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: id,
    })
  };

  const renderImage = () => {
    switch(image) {
      case 'Book1':
        return <img className="checkoutProduct__image" src={Book1} />;
      case 'Book2':
        return <img className="checkoutProduct__image" src={Book2} />;
      case 'Book3':
        return <img className="checkoutProduct__image" src={Book3} />;
      case 'FOAFacemask':
        return <img className="checkoutProduct__image" src={FOAFacemask} />;
      case 'AIFacemask':
        return <img className="checkoutProduct__image" src={AIFacemask} />;
      case 'EbonsFang':
        return <img className="checkoutProduct__image" src={EbonsFang} />;
      case 'FOATeeShirt':
        return <img className="checkoutProduct__image" src={FOATeeShirt} />;
      case 'FOAHoodie':
        return <img className="checkoutProduct__image" src={FOAHoodie} />;
      case 'FOACap':
        return <img className="checkoutProduct__image" src={FOACap} />;
    }
  }

  return (
    <div className="checkoutProduct">
      {
        renderImage()
      }

      <div className='checkoutProduct__info'>

        <p className='checkoutProduct__title'>
          {title}
        </p>

        <p className='checkoutProduct__price'>
          <small>£</small><strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
        <p>⭐{rating}/5</p>
        </div>

        <button className='checkoutProduct__button' onClick={removeFromBasket}>Remove from Basket</button>

      </div>

    </div>
  )
}

export default CheckoutProduct;