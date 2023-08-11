import React from 'react';
import  style from './Card.module.css'
const Card = (inter) => {
    return <div className={`${style.card} ${inter.className}`}>{inter.children}</div>
}
export default Card;