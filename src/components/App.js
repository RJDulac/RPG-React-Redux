import React from "react";
import { connect } from "react-redux";

import HealthBar from "./Health/HealthBar";

import { playerHealth } from "../actions";

const App = ({ playerHealthAmount, playerHealth }) => {
  return (
    <div>
      <HealthBar healthAmount={playerHealthAmount} />
      <button
        onClick={() =>
          playerHealth(
            playerHealthAmount <= 0
              ? (playerHealthAmount = 0)
              : playerHealthAmount - 20
          )
        }
      >
        Take damage
      </button>
      <button
        onClick={() =>
          playerHealth(
            playerHealthAmount >= 100
              ? (playerHealthAmount = 100)
              : playerHealthAmount + 20
          )
        }
      >
        Heal
      </button>
      <button onClick={() => playerHealth((playerHealthAmount = 100))}>
        Full Heal
      </button>
      <p>{playerHealthAmount}</p>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state.playerHealthAmount);
  return { playerHealthAmount: state.playerHealthAmount };
};
export default connect(mapStateToProps, { playerHealth })(App);
