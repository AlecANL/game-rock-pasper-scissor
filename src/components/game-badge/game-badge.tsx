import { BadgeStyled } from './badge.styled';

const GameBadge: React.FC<{ img: string; name: string }> = ({ img, name }) => {
  return (
    <BadgeStyled>
      <img src={`${img}.svg`} alt={name} />
    </BadgeStyled>
  );
};

export default GameBadge;
