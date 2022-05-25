import React from 'react'

import Product from '../Product/Product'
import { products } from './../../Util/products/products'

import './Home.css'

function Home() {
    const renderProduct = (i) => {
        return <Product 
            key = {`PROD-${products[i].id}`}
            id = {products[i].id}
            title = {products[i].title}
            price = {products[i].price}
            rating = {products[i].rating}
            image = {products[i].image}
            />
    }

  return (
    <div className="home">
        <div className="home__container">

            {/* Banner */}
            <div className="home__banner">
                Banner
            </div>

            <div className="home__row">
                {
                    renderProduct(0)
                }
                {
                    renderProduct(1)
                }
                {
                    renderProduct(2)
                }
            </div>

            <div className="home__row">
                {
                    renderProduct(3)
                }
                {
                    renderProduct(4)
                }
            </div>

            <div className="home__row">
                {
                    renderProduct(5)
                }
            </div>

            <div className="home__row">
                {
                    renderProduct(6)
                }
                {
                    renderProduct(7)
                }
                {
                    renderProduct(8)
                }
            </div>


        </div>

    </div>
  )
}

export default Home;
