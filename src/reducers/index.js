import { combineReducers } from "redux";
import { PLAYER_HEALTH } from "../actions/types";

const playerHealthAmount = (playerHealthAmount = 100, action) => {
  switch (action.type) {
    case PLAYER_HEALTH:
      return action.payload;
    default:
      return playerHealthAmount;
  }
  // if (action.type === "CHANGE_playerHealth") {
  //   return action.payload;
  // }
  // return playerHealth;
};

export default combineReducers({
  playerHealthAmount
});
