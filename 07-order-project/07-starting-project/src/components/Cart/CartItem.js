import classes from './CartItem.module.css';

const CartItem = (inter) => {
  const price = `$${inter.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{inter.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {inter.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={inter.onRemove}>−</button>
        <button onClick={inter.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
