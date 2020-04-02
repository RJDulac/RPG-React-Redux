import React from "react";
import { connect } from "react-redux";

import HealthBar from "./Health/HealthBar";
import TakeDamage from "./Health/TakeDamage";
import Heal from "./Health/Heal";
import FullHealth from "./Health/FullHealth";

import { playerHealth } from "../actions";

const App = ({ playerHealthAmount, playerHealth }) => {
  return (
    <div>
      <HealthBar healthAmount={playerHealthAmount} />
      <TakeDamage
        // action on health - player or monster - action neeeded - amount of damage dealt
        healthAmount={playerHealthAmount}
        healthAction={playerHealth}
        damageAmount={10}
      />
      <Heal
        // action on health - health amount from state - amount of health healed
        healthAction={playerHealth}
        healthAmount={playerHealthAmount}
        healAmount={20}
      />
      <FullHealth
        healthAction={playerHealth}
        healthAmount={playerHealthAmount}
      />
      <p>{playerHealthAmount}</p>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state.playerHealthAmount);
  return { playerHealthAmount: state.playerHealthAmount };
};
export default connect(mapStateToProps, { playerHealth })(App);
