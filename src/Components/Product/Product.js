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

import './Product.css';

function Product ({ id, title, image, price, rating }) {

  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })

  }

  const renderImage = () => {
    switch(image) {
      case 'Book1':
        return <img className="product__image" src={Book1} />;
      case 'Book2':
        return <img className="product__image" src={Book2} />;
      case 'Book3':
        return <img className="product__image" src={Book3} />;
      case 'FOAFacemask':
        return <img className="product__image" src={FOAFacemask} />;
      case 'AIFacemask':
        return <img className="product__image" src={AIFacemask} />;
      case 'EbonsFang':
        return <img className="product__image" src={EbonsFang} />;
      case 'FOATeeShirt':
        return <img className="product__image" src={FOATeeShirt} />;
      case 'FOAHoodie':
        return <img className="product__image" src={FOAHoodie} />;
      case 'FOACap':
        return <img className="product__image" src={FOACap} />;
    }
  }

  return (
    <div className="product">

      <div className="product__info">

        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>
            {price}
          </strong>
        </p>

        <div className="product__rating">
          <p>⭐{rating}/5</p>
        </div>

      </div>

      {
        renderImage()
      }

      <button className="product__button" onClick={addToBasket} >
        Add to basket
      </button>

    </div>
  )
}

export default Product;