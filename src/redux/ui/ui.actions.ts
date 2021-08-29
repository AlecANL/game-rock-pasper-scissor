import { IUIAction, uiActionTypes } from './ui.types';

export function setGameMode(gameMode: string): IUIAction {
  return {
    type: uiActionTypes.SET_GAME_MODE,
    payload: gameMode,
  };
}
export function showModalRules(isShow: boolean): IUIAction {
  return {
    type: uiActionTypes.SHOW_MODAL,
    payload: isShow,
  };
}
