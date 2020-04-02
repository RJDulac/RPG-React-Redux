import React from "react";
import "./HealthBar.css";

import { adjustHealthToLevel } from "../../../helperFunctions/helperFunctions";

const HealthBar = ({ healthAmount, name }) => {
  //conditionals to check for who is taking damage?
  return (
    <div className="health-bar-container">
      <span>{name}</span>
      <span>
        {Math.floor((healthAmount * 100) / adjustHealthToLevel(100))}%
      </span>
      <div
        className="health-bar"
        //use conditional logic to change colors to yellow and then red based on % of damage
        style={{
          width: (healthAmount * 100) / adjustHealthToLevel(100) + "%"
        }}
      ></div>
    </div>
  );
};

export default HealthBar;
