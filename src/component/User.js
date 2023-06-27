import React, { useState } from "react";

export const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count1: {count1}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: Bengaluru</h2>
      <h2>Contact Us: foody@gmail.com</h2>
    </div>
  );
};
