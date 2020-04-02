import React from "react";

const TakeDamage = ({ healthAmount, healthAction, damageAmount }) => {
  return (
    <div>
      <button
        onClick={() =>
          healthAction(
            healthAmount <= 0 ? (healthAmount = 0) : healthAmount - damageAmount
          )
        }
      >
        Take damage
      </button>
    </div>
  );
};

export default TakeDamage;
