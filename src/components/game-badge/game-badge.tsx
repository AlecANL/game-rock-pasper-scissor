import { useDispatch, useSelector } from 'react-redux';
import { BadgeStyled } from './badge.styled';
import { toggleInGame, userSelectedOption } from '../../redux/game/game.action';

type BadgeProps = {
  img: string;
  name: string;
  color: string;
  id: number;
};

const GameBadge: React.FC<{ badgeProp: BadgeProps }> = ({ badgeProp }) => {
  const inGame: boolean = useSelector((state: any) => state.game.inGame);
  const dispatch = useDispatch();

  function handleUserInGame(): void {
    if (inGame) {
      dispatch(userSelectedOption(badgeProp));
      dispatch(toggleInGame(false));
      return;
    }
    return;
  }

  return (
    <BadgeStyled
      color={badgeProp.color}
      onClick={handleUserInGame}
      className={`is-${badgeProp.color}`}
    >
      <img src={`${badgeProp.img}.svg`} alt={badgeProp.name} />
      <div className="box"></div>
    </BadgeStyled>
  );
};

export default GameBadge;
