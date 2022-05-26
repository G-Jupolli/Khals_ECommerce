import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider/StateProvider';
import Order from '../Order/Order';

import { db } from './../../Util/firebase';

import './Orders.css';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      console.log('reaching db')
      console.log('user >>> ', user)
      db
       .collection('users')
       .doc(user?.uid)
       .collection('orders')
       .orderBy('created', 'desc')
       .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({
           id: doc.id,
           data: doc.data()
         })))
       ))

    } else {
      setOrders([])
    }

    console.log(orders)
  }, [user])

  console.log('oders >>> ', orders)

  return (
    <div className='orders' >
        <h1>Your Orders:</h1>

        <div className='orders__ordersContainer'>
          {orders?.map(order =>( 
            <Order 
              order={order}
            />
          ))}
        </div>
    </div>
  )
}

export default Orders