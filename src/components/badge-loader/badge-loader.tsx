import React from 'react';
import { BadgeLoaderStyled } from './badge-loader.styled';
import { IBadge } from '../../types/types';
import { TGameMode } from '../../redux/ui/ui.types';
import { useSelector } from 'react-redux';

const BadgeLoader: React.FC<{ listBadges: IBadge[] }> = ({ listBadges }) => {
  const [name, setName] = React.useState('rock');
  const gameMode: TGameMode = useSelector((state: any) => state.ui.gameMode);
  React.useEffect(() => {
    const imageInterval = setInterval(() => {
      const random = Math.floor(Math.random() * listBadges.length);
      setName(listBadges[random].name);
    }, 100);

    setTimeout(() => {
      clearInterval(imageInterval);
    }, 10000);

    return () => {
      clearInterval(imageInterval);
    };
  }, [listBadges]);
  return (
    <BadgeLoaderStyled gameMode={gameMode as string}>
      <img src={`./images/icon-${name}.svg`} alt="" />
      <div className="box"></div>
    </BadgeLoaderStyled>
  );
};

export default BadgeLoader;
