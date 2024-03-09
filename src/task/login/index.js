import React, { useEffect, useRef, useState } from "react";
import Button from "../components/button";
import CustomInput from "../components/input";
import "./login.css";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import DownArrow from "../Images/png/down_arrow.png";
import BlackCircle from "../Images/png/black-circle.png";
import Dropdown from "../components/dropdown";

const Connect = () => {
  const [connectbtn, setConnectBtn] = useState(false);
  const [confirm, setConfirm] = useState(true);


  return (
    <div className="login bg">
      <div>
        <Sidebar />
        <div className="black-card-wrapper">
          {confirm ? (
            <div>
              <p>
                Welcome to EtherScape Dapp! <br /> Please Connect Your Wallet
                <br />
                to Proceed
              </p>
              <Button
                className="yellow-btn"
                onClick={() => {
                  setConfirm(false);
                }}
              >
                Connect
              </Button>
            </div>
          ) : (
            <div className="submit-page">
              {connectbtn ? (
                <Button
                  className="yellow-btn"
                  onClick={(e) => {
                    setConnectBtn(false);
                  }}
                >
                  Connect
                </Button>
              ) : (
                <Dropdown/>
              )}

              <CustomInput
                // value="Enter Value"
                // onChange={handleChange}
                placeholder="Enter username to verify"
              />
              <Button className="yellow-btn">
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
