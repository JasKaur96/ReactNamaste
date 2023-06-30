import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnline();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/instamart">InstaMart</Link>
          </li>
          {/* <h4>{isOnline ? "Online" : "Offline"}</h4> */}
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {" "}
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
