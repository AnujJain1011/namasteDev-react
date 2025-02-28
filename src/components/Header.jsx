import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  //HOw can you do this with javascript?
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li className="links">Home</li>
          </Link>
          <Link to="/about">
            <li className="links">About</li>
          </Link>
          <Link to="/contact">
            <li className="links">Contact Us</li>
          </Link>
          <li className="links">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
