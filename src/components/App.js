import React from "react";
import { connect } from "react-redux";

import { changeHealth } from "../actions";

const App = ({ health, changeHealth }) => {
  return (
    <div>
      <button
        onClick={() => changeHealth(health <= 0 ? (health = 0) : health - 20)}
      >
        Take damage
      </button>
      <button
        onClick={() =>
          changeHealth(health >= 100 ? (health = 100) : health + 20)
        }
      >
        Heal
      </button>
      <button onClick={() => changeHealth((health = 100))}>Full Heal</button>
      <p>{health}</p>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps, { changeHealth })(App);
