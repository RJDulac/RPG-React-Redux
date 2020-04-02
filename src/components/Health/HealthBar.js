import React from "react";

const HealthBar = ({ healthAmount }) => {
  return (
    <div style={{ backgroundColor: "gray", width: "50%" }}>
      <div style={{ backgroundColor: "red", width: healthAmount + "%" }}>
        {healthAmount}
      </div>
    </div>
  );
};

export default HealthBar;
