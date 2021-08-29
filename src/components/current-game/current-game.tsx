import React from 'react';
import GameBadge from '../game-badge/game-badge';
import { useDispatch, useSelector } from 'react-redux';
import { IBadge } from 'src/redux/game/game.type';
import {
  GameOptionsStyled,
  TableInGameStyled,
  MessageStyled,
} from './current-game.styled';
import {
  toggleInGame,
  getResults,
  computedSelected,
  userSelectedOption,
} from '../../redux/game/game.action';
import BadgeLoader from '../badge-loader/badge-loader';
import { calcComputed, calcResults } from 'src/service/computedSelected';
import { setScore } from '../../redux/game/game.action';
import { TResults } from '../../redux/game/game.type';

const CurrentGame: React.FC<{ listBadges: IBadge[] }> = ({ listBadges }) => {
  const userSelected: IBadge = useSelector(
    (state: any) => state.game.userSelected
  );
  const aiSelected: IBadge = useSelector(
    (state: any) => state.game.computedSelected
  );

  const hasResults: TResults = useSelector((state: any) => state.game.results);

  const dispatch = useDispatch();

  function handleResetGame(): void {
    dispatch(toggleInGame(true));
    dispatch(computedSelected(null));
    dispatch(userSelectedOption(null));
    dispatch(getResults(null));
  }

  React.useEffect(() => {
    calcComputed(listBadges)
      .then(selection => {
        dispatch(computedSelected(selection));
      })
      .catch(console.error);
  }, [dispatch, listBadges]);

  React.useEffect(() => {
    if (aiSelected && userSelected) {
      const results: string = calcResults(aiSelected, userSelected);
      dispatch(getResults(results));
      if (results === 'win') {
        dispatch(setScore());
      }
    }
  }, [aiSelected, userSelected, dispatch]);

  return (
    <TableInGameStyled>
      <GameOptionsStyled showResults={hasResults}>
        <div className={`option user-${hasResults === 'win' && 'win'}`}>
          <GameBadge badgeProp={userSelected} />
          <span>your picked</span>
        </div>
        <div className={`option computed-${hasResults === 'lose' && 'win'}`}>
          {hasResults ? (
            <GameBadge badgeProp={aiSelected} />
          ) : (
            <BadgeLoader listBadges={listBadges} />
          )}
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

export default React.memo(CurrentGame);
