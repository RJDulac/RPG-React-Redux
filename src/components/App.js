import React from "react";
import { connect } from "react-redux";

import HealthBar from "./Hud/Health/HealthBar";
import TakeDamage from "./Hud/Health/TakeDamage";
import Heal from "./Hud/Health/Heal";
import FullHealth from "./Hud/Health/FullHealth";

import { playerHealth, monsterHealth } from "../actions";
import Hud from "./Hud/Hud";

const App = ({ playerHealthAmount, playerHealth, monsterHealthAmount }) => {
  return (
    <div>
      <Hud />

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
  return {
    playerHealthAmount: state.playerHealthAmount,
    monsterHealthAmount: state.monsterHealthAmount
  };
};
export default connect(mapStateToProps, { playerHealth, monsterHealth })(App);
