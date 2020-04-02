import React from "react";
import { connect } from "react-redux";

import { playerHealth } from "../../actions";
import HealthBar from "./Health/HealthBar";

import GainHealth from "./Health/GainHealth";
import "./Hud.css";

const Hud = ({ playerHealthAmount, playerHealth, monsterHealthAmount }) => {
  return (
    <div>
      <GainHealth
        healthAmount={playerHealthAmount}
        healthAction={playerHealth}
        amount={1}
      />
      <div className="health-bars-container">
        <HealthBar healthAmount={playerHealthAmount} name="Player Health" />
        <HealthBar healthAmount={monsterHealthAmount} name="Monster Health" />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerHealthAmount: state.playerHealthAmount,
    monsterHealthAmount: state.monsterHealthAmount
  };
};
export default connect(mapStateToProps, { playerHealth })(Hud);
