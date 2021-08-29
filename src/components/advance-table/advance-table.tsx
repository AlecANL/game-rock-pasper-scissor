import React from 'react';
import { IBadge } from '../../types/types';
import GameBadge from '../game-badge/game-badge';
import { AdvanceTableStyled } from './advance-table.styled';

const AdvanceTable: React.FC<{ listBadges: IBadge[] }> = ({ listBadges }) => {
  return (
    <AdvanceTableStyled>
      {listBadges.map((badge: IBadge) => (
        <GameBadge key={badge.id} badgeProp={badge} />
      ))}
    </AdvanceTableStyled>
  );
};

export default AdvanceTable;
