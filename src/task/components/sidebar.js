import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Logo } from "../Images/svg/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Medium } from "../Images/svg/Medium.svg";
import { ReactComponent as Discord } from "../Images/svg/Discord.svg";
import { ReactComponent as Telegram } from "../Images/svg/Telegram.svg";
import { ReactComponent as Twitter } from "../Images/svg/Twitter.svg";
const Sidebar = () => {
  const ref = useRef();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Deposit");
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
        setActiveItem("Deposit");

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
        setActiveItem("Deposit");
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1199);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [location]);

  return (
    <div className="sidebar-wrapper">
      <Logo />
      <div className="social-media">
        <span>
          <Link to="https://twitter.com/Ether_Scape" target="_blank" rel="noopener noreferrer"><Twitter /></Link>
          
        </span>
        <span>
          <Link to="https://t.me/Etherscape" target="_blank" rel="noopener noreferrer"><Telegram /></Link>
          
        </span>
        <span>
          <Link to="https://discord.gg/ether-scape" target="_blank" rel="noopener noreferrer"><Discord /></Link>
          
        </span>
        <span>
          <Link to="https://medium.com/@Ether_Scape" target="_blank" rel="noopener noreferrer"><Medium /></Link>
          
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
              <div className={activeItem === "Deposit" ? "active" : ""}>
                <Link to="/deposit">Deposit</Link>
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
          <li className={activeItem === "Deposit" ? "active" : ""}>
            <Link to="/deposit">Deposit</Link>
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
