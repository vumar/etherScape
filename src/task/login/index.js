import React from "react";
import Button from "../components/button";
import CustomInput from "../components/input";
import "./login.css";
import { Link } from "react-router-dom"; 

const Connect = () => {

  const handleChange = (e) => {
    console.log('handle Change')
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="login bg">
      <div className="black-card-wrapper">
        <div>
          <CustomInput
            // value="Enter Value"
            // onChange={handleChange}
            placeholder="Enter username to verify"
          />
          <Button className="yellow-btn" onClick={handleClick}>
            <Link to="/deposit">Default Button</Link>
            
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
