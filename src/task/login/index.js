import React, { useState } from "react";
import Button from "../components/button";
import CustomInput from "../components/input";
import "./login.css";
import { Link } from "react-router-dom";
import CustomSelect from "../components/select";
import Sidebar from "../components/sidebar";

const Connect = () => {
  const [confirm, setConfirm] = useState(true);

  const handleChange = (e) => {
    console.log("handle Change");
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="login bg">
      <div>
        <Sidebar />
        <div className="black-card-wrapper">
          {confirm ? (
            <div>
              <p>
                Welcome to EtherScape Dapp! <br /> Please Connect Your Wallet{" "}
                <br />
                to Proceed
              </p>
              <Button
                className="yellow-btn"
                onClick={() => {
                  setConfirm(false);
                }}
              >
                {/* <Link
                  to="/deposit"
                  onClick={() => {
                    setConfirm(true);
                  }}
                >
                  Connect
                </Link> */}
                Connect
              </Button>
            </div>
          ) : (
            <div className="submit-page">
              <CustomSelect />
              <CustomInput
                // value="Enter Value"
                // onChange={handleChange}
                placeholder="Enter username to verify"
              />
              <Button className="yellow-btn" onClick={handleClick}>
                <Link
                  to="/deposit"
                  onClick={() => {
                    setConfirm(true);
                  }}
                >
                  Submit
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Connect;
