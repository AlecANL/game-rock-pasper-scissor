export interface IUIState {
  gameMode: string | null;
  isShowModalRules: boolean;
}

export interface IUIAction {
  type: string;
  payload: any;
}

export type TGameMode = string | null;

export const uiActionTypes = {
  SET_GAME_MODE: '[UI]: SET_GAME_MODE',
  SHOW_MODAL: '[UI]: SHOW_MODAL',
};
