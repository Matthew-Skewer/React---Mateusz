import React from "react";
import StylePut from "./Input.css";

const Input = React.forwardRef((inter, ref) => {
  return (
    <div className={StylePut.input}>
      <label htmlFor={inter.input.id}>{inter.label}</label>
      <input ref={ref} {...inter.input} />
    </div>
  );
});

export default Input;
