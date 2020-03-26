import { combineReducers } from "redux";

const health = (health = 100, action) => {
  if (action.type === "CHANGE_HEALTH") {
    return action.payload;
  }
  return health;
};

export default combineReducers({
  health
});
