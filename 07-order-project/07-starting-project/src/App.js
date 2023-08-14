import React, { useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartShow, manageCartShow] = useState(false);

  const showCart = () => {
    manageCartShow(true);
  }

  const hideCart = () => {
    manageCartShow(false);
  }

  return (
    <CartProvider>
      <Header onShowCart={showCart}></Header>
      <main>
        <Meals/>
      </main>
      {cartShow && <Cart onHideCart={hideCart}/>}
    </CartProvider>
  );
}

export default App;
