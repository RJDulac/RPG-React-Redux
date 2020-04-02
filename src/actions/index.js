import { PLAYER_HEALTH, MONSTER_HEALTH } from "./types";

export const playerHealth = playerHealthAmount => {
  return {
    type: PLAYER_HEALTH,
    payload: playerHealthAmount
  };
};

export const monsterHealth = monsterHealth => {
  return {
    type: MONSTER_HEALTH,
    payload: monsterHealth
  };
};
