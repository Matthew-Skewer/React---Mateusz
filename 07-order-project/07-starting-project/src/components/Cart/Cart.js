import React, { useContext } from "react";
import CartStyle from "./Cart.module.css";
import Modal from "../Interface/Modal";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (inter) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={CartStyle["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={inter.onHideCart}>
      {cartItems}
      <div className={CartStyle.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={CartStyle.actions}>
        <button className={CartStyle["button--alt"]} onClick={inter.onHideCart}>
          Close
        </button>
        {hasItems && <button className={CartStyle.button}>Order Kart</button>}
      </div>
    </Modal>
  );
};
export default Cart;
