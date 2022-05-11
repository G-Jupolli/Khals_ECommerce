import React from 'react'

import Product from '../Product/Product'

import './Home.css'

function Home() {
  return (
    <div className="home">
        <div className="home__container">

            {/* Banner */}
            <div className="home__banner">
                Banner
            </div>

            <div className="home__row">
                <Product 
                    id="dfgdfg5ege"
                    title="something anout a product which is it's data"
                    price={15.50}
                    rating={5}
                    image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/Find-a-Book-Title-When-You-Dont-Know-the-Name.jpeg?resize=738%2C320&ssl=1"
                />
                <Product 
                    id="g3h47q68ifgfq3476"
                    title="something anout a product which is it's data"
                    price={15.50}
                    rating={5}
                    image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/Find-a-Book-Title-When-You-Dont-Know-the-Name.jpeg?resize=738%2C320&ssl=1"
                />
                <Product 
                    id="85v94n745n879"
                    title="something anout a product which is it's data"
                    price={15.50}
                    rating={5}
                    image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/Find-a-Book-Title-When-You-Dont-Know-the-Name.jpeg?resize=738%2C320&ssl=1"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="h6h65eh6e56h"
                    title="something anout a product which is it's data"
                    price={15.50}
                    rating={5}
                    image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/Find-a-Book-Title-When-You-Dont-Know-the-Name.jpeg?resize=738%2C320&ssl=1"
                />
                <Product 
                    id="4ta4ta4ta4t"
                    title="something anout a product which is it's data"
                    price={15.50}
                    rating={5}
                    image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/Find-a-Book-Title-When-You-Dont-Know-the-Name.jpeg?resize=738%2C320&ssl=1"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="4u65764hjswr5sy5r"
                    title="something anout a product which is it's data"
                    price={15.50}
                    rating={5}
                    image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/Find-a-Book-Title-When-You-Dont-Know-the-Name.jpeg?resize=738%2C320&ssl=1"
                />
            </div>


        </div>

    </div>
  )
}

export default Home;
