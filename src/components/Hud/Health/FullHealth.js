import React from "react";

const FullHealth = ({ healthAction, healthAmount }) => {
  return (
    <button onClick={() => healthAction((healthAmount = 100))}>
      Full Heal
    </button>
  );
};

export default FullHealth;
