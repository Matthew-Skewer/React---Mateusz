import React from "react";
import aesthetic from "./UsersList.module.css";
import Card from '../UI/Card'

const UsersList = (inter) => {
  return (
    <Card className={aesthetic.users}>
    <ul>
      {inter.users.map((user) => (
        <li key={user.id}>
         
          {user.name} ({user.age} years old)
         
        </li>
      ))}
    </ul>
    </Card>
  );
};
export default UsersList;
