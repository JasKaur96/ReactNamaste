import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//JSX (transpiled begore it reaches the JS) - Parcel - Babel
// JSX => Babel transpiles to React.createElement => ReactElement-JS Object => HTMLElement(render)
const heading = (
  <h1 className="head" tabIndex="2">
    Namaste React
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
