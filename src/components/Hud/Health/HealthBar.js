import React from "react";
import "./HealthBar.css";

const HealthBar = ({ healthAmount, name }) => {
  return (
    <div className="health-bar-container">
      <span>{name}</span>
      <span>{healthAmount}%</span>
      <div
        className="health-bar"
        //use conditional logic to change colors to yellow and then red based on % of damage
        style={{ width: healthAmount + "%" }}
      ></div>
    </div>
  );
};

export default HealthBar;
