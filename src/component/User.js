import React, { useEffect, useState } from "react";

export const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("stop setInterval");
    };
  });
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: Bengaluru</h2>
      <h2>Contact Us: foody@gmail.com</h2>
    </div>
  );
};
