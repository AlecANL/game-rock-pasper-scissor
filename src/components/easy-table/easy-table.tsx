import GameBadge from '../game-badge/game-badge';
import { EasyTableStyled } from './easy-table.styled';

type listBadges = {
  img: string;
  name: string;
  id: number;
};

const EasyTable: React.FC<{ listBadges: listBadges[] }> = ({ listBadges }) => {
  return (
    <EasyTableStyled>
      {listBadges.map(badge => (
        <GameBadge name={badge.name} img={badge.img} key={badge.id} />
      ))}
    </EasyTableStyled>
  );
};

export default EasyTable;
