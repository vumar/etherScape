import React, { useEffect, useRef, useState } from "react";
import DownArrow from "../Images/png/down_arrow.png";
import BlackCircle from "../Images/png/black-circle.png";

const Dropdown = () => {
  const ref = useRef();
  const [open, setOpen] = useState();
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  const copyCode = () => {
    const codeSpan = document.querySelector(
      ".dropdown-btn > div .code span"
    );

    if (codeSpan) {
      const codeValue = codeSpan.textContent;
      navigator.clipboard
        .writeText(codeValue)
        .then(() => {
          alert("Code copied: " + codeValue);
        })
        .catch((error) => {
          console.error("Copy failed: ", error);
        });
    }
  };

  return (
    <>
      <div
        className="custom-select-container"
        onClick={() => setOpen(!open)}
        ref={ref}
      >
        <div className="dropdown">
          <div
            onClick={(e) => {
              setIsActive(!isActive);
            }}
            className="dropdown-btn"
          >
            <div>
              <span>5 ETH</span>
              <div className="code">
                <img src={BlackCircle} />
                <span>0xdeedirfed4r</span>
              </div>
            </div>
            <span>
              <img src={DownArrow} alt="downarrow" />
            </span>
          </div>
          <div
            className="dropdown-content"
            style={{ display: isActive ? "block" : "none" }}
          >
            <div
              onClick={(e) => {
                copyCode();
                setIsActive(!isActive);
              }}
              className="item"
            >
              Copy address
            </div>
            <div
              className="item"
              onClick={(e) => {
                setIsActive(!isActive);
              }}
            >
              Disconnect
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
