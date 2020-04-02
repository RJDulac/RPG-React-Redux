import React from "react";

const GainHealth = ({ healthAmount, healthAction, amount }) => {
  return (
    <div>
      <button onClick={() => healthAction((healthAmount += amount))}>
        Increase Health attribute
      </button>
    </div>
  );
};
export default GainHealth;
