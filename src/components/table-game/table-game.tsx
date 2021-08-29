import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CurrentGame from '../current-game/current-game';
import EasyTable from '../easy-table/easy-table';

type BadgesInterface = {
  img: string;
  name: string;
  id: number;
  color: string;
};

const listBadgesEasy: BadgesInterface[] = [
  {
    img: `${process.env.PUBLIC_URL}/images/icon-rock`,
    name: 'rock',
    id: 1,
    color: 'red',
  },
  {
    img: `${process.env.PUBLIC_URL}/images/icon-scissors`,
    name: 'scissors',
    id: 3,
    color: 'yellow',
  },
  {
    img: `${process.env.PUBLIC_URL}/images/icon-paper`,
    name: 'paper',
    id: 2,
    color: 'blue',
  },
];

const TableGame: React.FC = () => {
  const gameMode: string = 'easy';
  const isPlaying = useSelector((state: any) => state.game.inGame);

  function renderTable() {
    switch (gameMode) {
      case 'easy':
        return <EasyTable listBadges={listBadgesEasy} />;
      default:
        return <EasyTable listBadges={listBadgesEasy} />;
    }
  }
  useEffect(() => {
    console.log(isPlaying);
  }, [isPlaying]);

  return <div>{isPlaying ? renderTable() : <CurrentGame />}</div>;
};

export default TableGame;
