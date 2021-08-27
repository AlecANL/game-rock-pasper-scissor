import { BadgeStyled } from './badge.styled';
type BadgeProps = {
  img: string;
  name: string;
  color: string;
  id: number;
};

const GameBadge: React.FC<{ badgeProp: BadgeProps }> = ({ badgeProp }) => {
  return (
    <BadgeStyled color={badgeProp.color}>
      <img src={`${badgeProp.img}.svg`} alt={badgeProp.name} />
      <div className="box"></div>
    </BadgeStyled>
  );
};

export default GameBadge;
