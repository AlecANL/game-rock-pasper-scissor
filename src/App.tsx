import React from 'react';
import { Provider } from 'react-redux';
import Score from './components/score/score';
import GlobalStyled from './styles/global';
import { store } from './redux/store';
import TableGame from './components/table-game/table-game';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="game">
        <GlobalStyled />
        <div className="wrapper">
          <div className="game-content">
            <Score />
            <TableGame />
            <div className="button">
              <button className="btn is-btn-home">rules</button>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
