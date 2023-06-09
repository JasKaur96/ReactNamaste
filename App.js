import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="heading" tabIndex="2">
    Namaste React !!
  </h1>
);

//Component Composition - component within a component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading" tabIndex="2">
      Functional Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
