import React from 'react';
import EasyTable from './components/easy-table/easy-table';
import Score from './components/score/score';
import GlobalStyled from './styles/global';

type BadgesInterface = {
  img: string;
  name: string;
  id: number;
};

const listBadges: BadgesInterface[] = [
  {
    img: `${process.env.PUBLIC_URL}/images/icon-rock`,
    name: 'rock',
    id: 1,
  },
  {
    img: `${process.env.PUBLIC_URL}/images/icon-scissors`,
    name: 'scissors',
    id: 3,
  },
  {
    img: `${process.env.PUBLIC_URL}/images/icon-paper`,
    name: 'paper',
    id: 2,
  },
];

const App: React.FC = () => {
  return (
    <div className="game">
      <GlobalStyled />
      <div className="wrapper">
        <div className="game-content">
          <Score />
          <EasyTable listBadges={listBadges} />
          <div className="button">
            <button className="btn">rules</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
