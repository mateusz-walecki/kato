import { Close, MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../img/logo.svg";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <div className="menu-icon">
        <MenuOutlined className="menu" onClick={showMenu} />
      </div>

      <nav className={active ? "slider active" : "slider"}>
        <ul>
          <div className="logoWide">
            <Logo />
            <p className="company">Findtrend</p>
          </div>

          <div className="closed">
            <div className="logo">
              <Logo />
            </div>
            <Close className="close" onClick={showMenu} />
          </div>

          <li>
            <Link to="/">
              <p className="typicle">About</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p className="typicle">How it work</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p className="typicle">Pricing</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p className="typicle">Solution</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p className="typicle">Features</p>
            </Link>
          </li>
          <div className="leftBox">
            <li>
              <Link to="/">
                <p className="login">Login</p>
              </Link>
            </li>
          </div>
          <div className="rightBox">
            <li>
              <Link to="/">
                <p className="register">Register</p>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
