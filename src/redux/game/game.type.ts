export interface IBadge {
  id: number;
  img: string;
  color: string;
  name: string;
}

export type TScore = number;

export type TResults = string | null;

export type GameState = {
  inGame: boolean;
  userSelected: unknown | null;
  computedSelected: unknown | null;
  results: TResults;
  score: TScore;
};

export type GameAction = {
  type: string;
  payload: any;
};

export type DispatchType = (args: GameAction) => GameAction;

export const GameTypes = {
  IN_GAME: '[GAME]: IN_GAME',
  USER_SELECTED: '[GAME]: USER_SELECTED',
  GET_RESULTS: '[GAME]: GET_RESULTS',
  COMPUTED_SELECTED: '[GAME]: COMPUTED_SELECTED',
  SET_SCORE: '[GAME]: SET_SCORE',
};
