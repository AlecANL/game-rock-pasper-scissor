import { combineReducers } from 'redux';
import { gameReducer } from './game/game.reducer';
import { uiReducer } from './ui/ui.reducer';

export const rootReducer = combineReducers({
  game: gameReducer,
  ui: uiReducer,
});
