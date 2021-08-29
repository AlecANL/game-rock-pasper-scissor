import { IUIAction, uiActionTypes } from './ui.types';

export function setGameMode(gameMode: string): IUIAction {
  return {
    type: uiActionTypes.SET_GAME_MODE,
    payload: gameMode,
  };
}
