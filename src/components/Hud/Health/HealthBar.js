import React from "react";
import "./HealthBar.css";

const HealthBar = ({ healthAmount, name }) => {
  return (
    <div className="health-bar-container">
      <div
        className="health-bar"
        //use conditional logic to change colors to yellow and then red based on % of damage
        style={{ width: healthAmount + "%" }}
      >
        <span>{name}</span>
        {healthAmount}
      </div>
    </div>
  );
};

export default HealthBar;
