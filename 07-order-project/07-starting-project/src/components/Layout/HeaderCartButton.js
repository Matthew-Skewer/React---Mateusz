import Cart from './CartIcon'
import CartContext from '../store/cart-context';
import Styleton from './HeaderCartButton.module.css'
import React, {useContext, useEffect, useState} from 'react';

const HeaderCartButton = inter => {
    
    const [Button, highlightedButton] = useState(false);

    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        
        return curNumber + item.amount;
    }, 0);

    

    const butClasses = `${Styleton.button} ${ Button ? Styleton.bump: ''}`;

    useEffect(()=>{     
        if (items.length === 0){
            return;
        }
        highlightedButton(true);

      const timer = setTimeout(()=>{
            highlightedButton(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    },[items]);

    return <button className={butClasses} onClick={inter.onClick}>
        
            <span className={Styleton.icon}>
                <Cart></Cart>
            </span>
            <span >Your Cart</span>
            <span className={Styleton.badge}>{numberOfCartItems}</span>
        
    </button>
}

export default HeaderCartButton;