export interface IBadge {
  id: number;
  img: string;
  color: string;
  name: string;
}

export type TResults = string | null;

export type GameState = {
  inGame: boolean;
  userSelected: unknown | null;
  computedSelected: unknown | null;
  results: string | null;
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
};
