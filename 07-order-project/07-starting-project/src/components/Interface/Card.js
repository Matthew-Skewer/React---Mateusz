import cardStyle from './Card.module.css'
import React from 'react'

const Card = inter => {
    return <div className={cardStyle.card}>{inter.children}</div>
};

export default Card;