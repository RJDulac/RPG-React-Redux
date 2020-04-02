import { combineReducers } from "redux";
import { PLAYER_HEALTH, MONSTER_HEALTH } from "../actions/types";

const playerHealthAmount = (playerHealthAmount = 100, action) => {
  switch (action.type) {
    case PLAYER_HEALTH:
      return action.payload;
    default:
      return playerHealthAmount;
  }
};

const monsterHealthAmount = (monsterHealthAmount = 100, action) => {
  switch (action.type) {
    case MONSTER_HEALTH:
      return action.payload;
    default:
      return monsterHealthAmount;
  }
};

export default combineReducers({
  playerHealthAmount,
  monsterHealthAmount
});
