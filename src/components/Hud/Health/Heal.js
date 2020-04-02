import React from "react";

const Heal = ({ healthAction, healthAmount, healAmount }) => {
  return (
    <button
      onClick={() =>
        healthAction(
          healthAmount >= 100 - healAmount
            ? (healthAmount = 100)
            : healthAmount + healAmount
        )
      }
    >
      Heal
    </button>
  );
};

export default Heal;
