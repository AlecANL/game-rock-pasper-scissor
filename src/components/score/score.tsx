import React from 'react';
import { ScoreStyled } from './score.styled';
import { TScore } from '../../redux/game/game.type';
import { useSelector } from 'react-redux';

const Score: React.FC = () => {
  const score: TScore = useSelector((state: any) => state.game.score);

  return (
    <ScoreStyled>
      <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo game" />
      <div className="user-score">
        <span>score</span>
        <h1>{score}</h1>
      </div>
    </ScoreStyled>
  );
};

export default Score;
