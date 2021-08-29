import { GameState as gameState } from './game.type';
import { GameAction as gameAction } from './game.type';
import { GameTypes as actionTypes } from './game.type';

const initialState: gameState = {
  inGame: true,
  userSelected: null,
  computedSelected: null,
  results: null,
  score: 0,
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
    case actionTypes.COMPUTED_SELECTED:
      return {
        ...state,
        computedSelected: action.payload,
      };
    case actionTypes.SET_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    default:
      return state;
  }
}
