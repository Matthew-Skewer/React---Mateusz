import React, { useState } from "react";
import Task2 from "./Task2";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Task1.css";

const Expenses = (props) => {
  const [filteredYear, choosefilteredYear] = useState("2020");

  const filterer = (selectedYear) => {
    choosefilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <Task2 selected={filteredYear} onChangeFilter={filterer} />

        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

       
      </Card>
    </div>
  );
};

export default Expenses;
