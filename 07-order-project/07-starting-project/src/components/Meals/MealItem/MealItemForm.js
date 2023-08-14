import React, { useRef, useState } from "react";
import FormStyle from "./MealItemForm.module.css";

import Input from "../../Interface/Input";

const MealItemForm = (inter) => {
  const [validAmount, setValidAmount] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 6
    ) {
      setValidAmount(false);
      return;
    }
    inter.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={FormStyle.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + inter.id,
          type: "number",
          min: "1",
          max: "6",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!validAmount && <p>Please enter a valid amount (1-6).</p>}
    </form>
  );
};

export default MealItemForm;
