import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <h1>count2 = {count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Kanpur</h3>
      <h4>Contact: 1234567890</h4>
      <h4>city: Kanpur</h4>
    </div>
  );
};
export default User;
