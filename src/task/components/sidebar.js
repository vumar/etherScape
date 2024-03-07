import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../Images/svg/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("DEPOSIT");

  useEffect(() => {
    // Extract the pathname from the location object
    const pathname = location.pathname;

    // Determine the active item based on the pathname
    switch (pathname) {
      case "/deposit":
        setActiveItem("DEPOSIT");
        break;
      case "/withdraw":
        setActiveItem("Withdraw");
        break;
      case "/stake":
        setActiveItem("Stake");
        break;
      case "/vote":
        setActiveItem("Vote");
        break;
      default:
        setActiveItem("DEPOSIT");
    }
  }, [location]);

  return (
    <div className="sidebar-wrapper">
      <Logo />
      <ul>
        <li className={activeItem === "DEPOSIT" ? "active" : ""}>
          <Link to="/deposit">DEPOSIT</Link>
        </li>
        <li className={activeItem === "Withdraw" ? "active" : ""}>
          <Link to="/withdraw">Withdraw</Link>
        </li>
        <li className={activeItem === "Stake" ? "active" : ""}>
          <Link to="/stake">Stake</Link>
        </li>
        <li className={activeItem === "Vote" ? "active" : ""}>
          <Link to="/vote">Vote</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
