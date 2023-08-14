import React from "react";
import Headstyle from './Header.module.css'
import mealim from '../../images/meals.jpg'
import CartButton from './HeaderCartButton'

const Header = inter => {
    return <React.Fragment>
        <header className={Headstyle.header}>
            <h1>React Meals Kurz</h1>
            <CartButton onClick={inter.onShowCart}>Cart</CartButton>    
        </header>
        <div className={Headstyle['main-image']}>
            <img  src={mealim} alt="A Food Table"/>
        </div>

    </React.Fragment>
}

export default Header;