import * as types from './action-types';

export const movePlayer = (player) => {
  return {
    type: types.MOVE_PLAYER,
    player
  };
}
