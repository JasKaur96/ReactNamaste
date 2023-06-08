import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {
    id: "parent",
    xyz: "abc",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement(
        "h1",
        {
          id: "heading",
          xyz: "abc",
        },
        "Hello World !"
      ),
      React.createElement(
        "h1",
        {
          id: "heading",
          xyz: "abc",
        },
        "This is Namaste React."
      ),
    ]
  )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
