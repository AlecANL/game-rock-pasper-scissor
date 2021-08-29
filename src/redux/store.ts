import { createStore, Store } from 'redux';
import { rootReducer } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { DispatchType, GameAction, GameState } from './game/game.type';

export const store: Store<GameState, GameAction> & { dispatch: DispatchType } =
  createStore(rootReducer, composeWithDevTools());
