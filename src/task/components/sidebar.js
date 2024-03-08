import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Logo } from "../Images/svg/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Medium from "../Images/png/Medium.png";
import Discord from "../Images/png/Discord.png";
import Telegram from "../Images/png/Telegram.png";
import Twitter from "../Images/png/Twitter (1).png";

const Sidebar = () => {
  const ref = useRef();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("DEPOSIT");
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState();
  const [menu, setMenu] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setMenu(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [location]);

  return (
    <div className="sidebar-wrapper">
      <Logo />
      <div>
        <span>
          <img src={Twitter} />
        </span>
        <span>
          <img src={Telegram} />
        </span>
        <span>
          <img src={Discord} />
        </span>
        <span>
          <img src={Medium} />
        </span>
      </div>
      {isMobile ? (
        <div
          className="custom-select-container"
          onClick={() => setOpen(!open)}
          ref={ref}
        >
          <div className="dropdown">
            <div
              onClick={(e) => {
                setMenu(!menu);
              }}
              className="dropdown-btn"
            >
              {activeItem}
            </div>
            <div
              className="dropdown-content"
              style={{ display: menu ? "block" : "none" }}
            >
              <div className={activeItem === "DEPOSIT" ? "active" : ""}>
                <Link to="/deposit">DEPOSIT</Link>
              </div>
              <div className={activeItem === "Withdraw" ? "active" : ""}>
                <Link to="/withdraw">Withdraw</Link>
              </div>
              <div className={activeItem === "Stake" ? "active" : ""}>
                <Link to="/stake">Stake</Link>
              </div>
              <div className={activeItem === "Vote" ? "active" : ""}>
                <Link to="/vote">Vote</Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ul>
          {/* Content for desktop resolution */}
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
      )}
    </div>
  );
};

export default Sidebar;
