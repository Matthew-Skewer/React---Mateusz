import React from 'react';

import Product from './Product';
import './styles.css';

export default function App() {
    const cena = [{
        title: 'Product 1',
        price: 10,
        description: 'First product'
    },
    {
        title: 'Product 2',
        price: 20,
        description: 'Second product'
    }
    
    ]
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product
             title = {cena[0].title}
             price = {cena[0].price}
             description = {cena[0].description}
            ></Product>
            <Product
              title = {cena[1].title}
             price = {cena[1].price}
             description = {cena[1].description}
            ></Product>
        </div>
    );
}