import GameBadge from '../game-badge/game-badge';
import { EasyTableStyled } from './easy-table.styled';

type listBadges = {
  img: string;
  name: string;
  id: number;
  color: string;
};

const EasyTable: React.FC<{ listBadges: listBadges[] }> = ({ listBadges }) => {
  return (
    <EasyTableStyled>
      {listBadges.map(badge => (
        <GameBadge badgeProp={badge} key={badge.id} />
      ))}
    </EasyTableStyled>
  );
};

export default EasyTable;
