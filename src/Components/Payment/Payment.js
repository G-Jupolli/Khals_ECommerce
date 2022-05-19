import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './../../Util/axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from '../../StateProvider/reducer';

import { useStateValue } from '../../StateProvider/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

import './Payment.css';

function Payment() {
    const [{ basket, user }] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [clientSecret, setClientSecret] = useState(true);
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
            });

            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handlechange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        }).then (({ paymentIntent }) => {

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            navigate('/orders', { replace: true })
        })
    };

  return (
    <div className='payment' >

        <div className='payment__container'>

            <h1>
                Checkout ({basket?.length} items)
            </h1>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Adress</h3>
                </div>
                <div className='payment__adress'>
                    <p>{user?.email}</p>
                    <p>123 road road</p>
                    <p>town city, country</p>
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
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
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>

                    <form onSubmit={handlesubmit}>
                        <CardElement onChange={handlechange} />

                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"£"}
                            />

                            <button disabled={processing || disabled || succeeded} >
                                <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                            </button>

                        </div>

                        {error && <div>{error}</div>}


                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Payment