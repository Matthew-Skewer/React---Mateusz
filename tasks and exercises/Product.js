import React from 'react';

export default function Product(pobieda) {
    return (
        <article className="product">
            <h2>{pobieda.title}</h2>
            <p className="price">${pobieda.price}</p>
            <p>{pobieda.description}</p>
        </article>
    );
}