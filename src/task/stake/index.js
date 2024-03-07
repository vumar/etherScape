import React from "react";
import Sidebar from "../components/sidebar";
import CustomInput from "../components/input";
import Button from "../components/button";
import "./stake.css";

const Stake = () => {
  return (
    <div className="stake-page bg">
      <div>
        <Sidebar />
        <div className="black-card-wrapper">
          <CustomInput
            // value="Stake"
            // onChange={handleChange}
            placeholder="Enter amount to stake"
          />
          <div className="detail">
            <div>
              <span>Days</span>
              <ul>
                <li className="active">7</li>
                <li className="">14</li>
                <li>21</li>
                <li>30</li>
                <li>60</li>
              </ul>
            </div>
            <div>
              <span>APY</span>
              <span>54%</span>
            </div>
            <div>
              <span>Withdraw Tax</span>
              <span>4%</span>
            </div>
            <div>
              <span>TVL</span>
              <span>$ 564, 895</span>
            </div>
          </div>
          <Button className="yellow-btn">Stake</Button>
        </div>
      </div>
    </div>
  );
};

export default Stake;
