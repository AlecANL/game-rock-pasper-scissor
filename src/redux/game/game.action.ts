import { GameTypes as actionTypes, TResults } from './game.type';
import { GameAction as gameAction } from './game.type';
import { IBadge } from './game.type';

export function toggleInGame(isInGame: boolean): gameAction {
  return {
    type: actionTypes.IN_GAME,
    payload: isInGame,
  };
}

export function userSelectedOption(badge: IBadge): gameAction {
  return {
    type: actionTypes.USER_SELECTED,
    payload: badge,
  };
}

export function getResults(results: TResults): gameAction {
  return {
    type: actionTypes.GET_RESULTS,
    payload: results,
  };
}
