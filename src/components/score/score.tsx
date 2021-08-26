import React from 'react';
import { ScoreStyled } from './score.styled';

const Score: React.FC = () => {
  return (
    <ScoreStyled>
      <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo game" />
      <div className="user-score">
        <span>score</span>
        <h1>12</h1>
      </div>
    </ScoreStyled>
  );
};

export default Score;
