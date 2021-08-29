import { IUIAction, IUIState, uiActionTypes } from './ui.types';

const initialState: IUIState = {
  gameMode: null,
};

export function uiReducer(
  state: IUIState = initialState,
  action: IUIAction
): IUIState {
  switch (action.type) {
    case uiActionTypes.SET_GAME_MODE:
      return {
        ...state,
        gameMode: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
