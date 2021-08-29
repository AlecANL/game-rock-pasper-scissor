export interface IUIState {
  gameMode: string | null;
}

export interface IUIAction {
  type: string;
  payload: any;
}

export type TGameMode = string | null;

export const uiActionTypes = {
  SET_GAME_MODE: '[UI]: SET_GAME_MODE',
};
