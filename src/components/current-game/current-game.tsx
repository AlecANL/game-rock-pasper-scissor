import React from 'react';
import GameBadge from '../game-badge/game-badge';
import { useDispatch, useSelector } from 'react-redux';
import { IBadge, TResults } from 'src/redux/game/game.type';
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

const CurrentGame: React.FC = () => {
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
    dispatch(getResults(null));
    dispatch(computedSelected(null));
    dispatch(userSelectedOption(null));
  }

  React.useEffect(() => {
    calcComputed(listBadgesEasy)
      .then(selection => {
        dispatch(computedSelected(selection));
      })
      .catch(console.error);
  }, [dispatch]);

  React.useEffect(() => {
    if (aiSelected && userSelected) {
      const results: string = calcResults(aiSelected, userSelected);
      results === 'win' && dispatch(setScore());
      dispatch(getResults(results));
    }
  }, [aiSelected, userSelected, dispatch]);

  return (
    <TableInGameStyled>
      <GameOptionsStyled showResults={hasResults}>
        <div className="option">
          <GameBadge badgeProp={userSelected} />
          <span>your picked</span>
        </div>
        <div className="option">
          {hasResults ? <GameBadge badgeProp={aiSelected} /> : <BadgeLoader />}
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
