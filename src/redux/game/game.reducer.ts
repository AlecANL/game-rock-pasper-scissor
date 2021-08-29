import { GameState as gameState } from './game.type';
import { GameAction as gameAction } from './game.type';
import { GameTypes as actionTypes } from './game.type';

const initialState: gameState = {
  inGame: true,
  userSelected: null,
  computedSelected: null,
  results: null,
};

export function gameReducer(
  state: gameState = initialState,
  action: gameAction
): gameState {
  switch (action.type) {
    case actionTypes.IN_GAME:
      return {
        ...state,
        inGame: action.payload,
      };
    case actionTypes.USER_SELECTED:
      return {
        ...state,
        userSelected: action.payload,
      };
    case actionTypes.GET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
}
