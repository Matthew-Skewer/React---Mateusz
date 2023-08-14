import MealStyle from "./MealItem.module.css";
import React, {useContext} from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = (inter) => {
    const cartCtx = useContext(CartContext);
    const price = `$${inter.price.toFixed(2)}`;
    
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
          id: inter.id,
          name: inter.name,
          amount: amount,
          price: inter.price,
        });
    }
  return (
    <li className={MealStyle.meal}>
      <div >
        <h3>{inter.name}</h3>
        <div className={MealStyle.description}>{inter.description}</div>
        <div className={MealStyle.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
