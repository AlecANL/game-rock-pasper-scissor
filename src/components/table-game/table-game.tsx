import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CurrentGame from '../current-game/current-game';
import EasyTable from '../easy-table/easy-table';
import Modal from '../modal/modal';
import { TGameMode } from '../../redux/ui/ui.types';
import AdvanceTable from '../advance-table/advance-table';
import Score from '../score/score';
import { IBadge } from '../../types/types';
import ModalRules from '../modal-rules/modal-rules';
import { showModalRules } from '../../redux/ui/ui.actions';

const listBadgesEasy: IBadge[] = [
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

const listBadgesAdvance: IBadge[] = [
  {
    img: `./images/icon-rock`,
    name: 'rock',
    id: 1,
    color: 'red',
  },
  {
    img: `./images/icon-scissors`,
    name: 'scissors',
    id: 3,
    color: 'yellow',
  },
  {
    img: `./images/icon-paper`,
    name: 'paper',
    id: 2,
    color: 'blue',
  },
  {
    img: `./images/icon-spock`,
    name: 'spock',
    id: 4,
    color: 'cyan',
  },
  {
    img: './images/icon-lizard',
    name: 'lizard',
    id: 5,
    color: 'purple',
  },
];

const TableGame: React.FC = () => {
  const gameMode: TGameMode = useSelector((state: any) => state.ui.gameMode);
  const isPlaying = useSelector((state: any) => state.game.inGame);
  const isShowModal: boolean = useSelector(
    (state: any) => state.ui.isShowModalRules
  );
  const dispatch = useDispatch();

  function handleShowModal() {
    dispatch(showModalRules(true));
  }

  function renderTable() {
    switch (gameMode) {
      case 'easy':
        return <EasyTable listBadges={listBadgesEasy} />;
      case 'hard':
        return <AdvanceTable listBadges={listBadgesAdvance} />;
      default:
        return <EasyTable listBadges={listBadgesEasy} />;
    }
  }
  if (!gameMode) return <Modal />;

  return (
    <main className="game-content">
      <Score />
      {isPlaying ? (
        renderTable()
      ) : (
        <CurrentGame
          listBadges={gameMode === 'easy' ? listBadgesEasy : listBadgesAdvance}
        />
      )}
      {isShowModal ? <ModalRules /> : null}
      <div className="button">
        <button className="btn is-btn-home" onClick={handleShowModal}>
          rules
        </button>
      </div>
    </main>
  );
};

export default TableGame;
