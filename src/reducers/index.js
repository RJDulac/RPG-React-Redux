import { combineReducers } from "redux";
import { PLAYER_HEALTH, MONSTER_HEALTH } from "../actions/types";

import { adjustHealthToLevel } from "../helperFunctions/helperFunctions";

const playerHealthAmount = (playerHealthAmount = 100, action) => {
  switch (action.type) {
    case PLAYER_HEALTH:
      return adjustHealthToLevel(action.payload);
    default:
      return adjustHealthToLevel(playerHealthAmount);
  }
};

const monsterHealthAmount = (monsterHealthAmount = 100, action) => {
  switch (action.type) {
    case MONSTER_HEALTH:
      return adjustHealthToLevel(action.payload);
    default:
      return adjustHealthToLevel(monsterHealthAmount);
  }
};

export default combineReducers({
  playerHealthAmount,
  monsterHealthAmount
});
