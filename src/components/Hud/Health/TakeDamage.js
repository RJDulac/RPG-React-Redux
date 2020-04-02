import React from "react";

import { adjustHealthToLevel } from "../../../helperFunctions/helperFunctions";

const TakeDamage = ({ healthAmount, healthAction, damageAmount }) => {
  return (
    <div>
      <button
        onClick={() =>
          healthAction(
            healthAmount <= 0
              ? (healthAmount = 0)
              : healthAmount - adjustHealthToLevel(damageAmount)
          )
        }
      >
        Take damage
      </button>
    </div>
  );
};

export default TakeDamage;
