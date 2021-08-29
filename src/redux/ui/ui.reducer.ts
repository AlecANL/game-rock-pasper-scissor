import { IUIAction, IUIState, uiActionTypes } from './ui.types';

const initialState: IUIState = {
  gameMode: null,
  isShowModalRules: false,
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
    case uiActionTypes.SHOW_MODAL:
      return {
        ...state,
        isShowModalRules: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
