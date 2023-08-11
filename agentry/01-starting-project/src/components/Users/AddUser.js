import React, { useState } from "react";
import "../UI/Button";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (inter) => {
  const [enteredData, setEnteredData] = useState("");
  const [claimedAge, claimAge] = useState("");
  const [validity, setValidity] = useState();

  const userNameChanger = (event) => {
    setEnteredData(event.target.value);
  };

  const ageChanger = (event) => {
    claimAge(event.target.value);
  };

  const userConfirmator = (event) => {
    event.preventDefault();
    if (enteredData.trim().length === 0 || claimedAge.trim().length === 0) {
      setValidity({
        title: "Invalid input",
        message: "Please enter a valid username and age (non-empty value)",
      });
      return;
    }
    if (claimedAge < 1) {
        setValidity({
        title: "Invalid input",
        message: "Please enter a valid  age (> 0)",
        });
      return;
    }
    inter.onAddUser(enteredData, claimedAge);

    setEnteredData("");
    claimAge("");
  };

  const errorHandler = () => {
    setValidity(null);
  }

  return (
    <div>
      {validity && <ErrorModal
        title={validity.title}
        message={validity.message}
        onConfirm={errorHandler}
      ></ErrorModal>}
      <Card className={styles.input}>
        <form onSubmit={userConfirmator}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredData}
            onChange={userNameChanger}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={claimedAge}
            onChange={ageChanger}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
        <ul></ul>
      </Card>
    </div>
  );
};
export default AddUser;
