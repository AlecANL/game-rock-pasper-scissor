import React from 'react';
import GameBadge from '../game-badge/game-badge';
import { useDispatch, useSelector } from 'react-redux';
import { IBadge, TResults } from 'src/redux/game/game.type';
import {
  GameOptionsStyled,
  TableInGameStyled,
  MessageStyled,
} from './current-game.styled';
import { toggleInGame, getResults } from '../../redux/game/game.action';
import BadgeLoader from '../badge-loader/badge-loader';

const CurrentGame: React.FC = () => {
  const state: IBadge = useSelector((state: any) => state.game.userSelected);
  const hasResults: TResults = useSelector((state: any) => state.game.results);

  const dispatch = useDispatch();

  function handleResetGame(): void {
    console.log(state);
    dispatch(toggleInGame(true));
    dispatch(getResults(null));
  }

  React.useEffect(() => {
    setTimeout(() => {
      console.log('hello');
      dispatch(getResults('win'));
    }, 3000);
  }, [dispatch]);

  return (
    <TableInGameStyled>
      <GameOptionsStyled showResults={hasResults}>
        <div className="option">
          <GameBadge badgeProp={state} />
          <span>your picked</span>
        </div>
        <div className="option">
          {hasResults ? <GameBadge badgeProp={state} /> : <BadgeLoader />}
          <span>the house picked</span>
        </div>
        {hasResults ? (
          <MessageStyled>
            <h2>you {hasResults}</h2>
            <button className="btn is-white" onClick={handleResetGame}>
              play again
            </button>
          </MessageStyled>
        ) : null}
      </GameOptionsStyled>
    </TableInGameStyled>
  );
};

export default CurrentGame;
