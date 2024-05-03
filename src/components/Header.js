import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg bg-blue-50">
      <div className="logo-container  ">
        <img className="logo w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Groceries</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="m-auto "
            onClick={() => {
              loginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
