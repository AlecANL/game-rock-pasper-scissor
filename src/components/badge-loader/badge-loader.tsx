import React from 'react';
import { BadgeLoaderStyled } from './badge-loader.styled';

const BadgeLoader: React.FC = () => {
  const [name, setName] = React.useState('rock');

  React.useEffect(() => {
    const listOptions = ['rock', 'paper', 'scissors'];
    const imageInterval = setInterval(() => {
      const random = Math.floor(Math.random() * listOptions.length);
      setName(listOptions[random]);
    }, 100);

    setTimeout(() => {
      clearInterval(imageInterval);
    }, 10000);

    return () => {
      clearInterval(imageInterval);
    };
  }, []);
  return (
    <BadgeLoaderStyled>
      <img src={`./images/icon-${name}.svg`} alt="" />
      <div className="box"></div>
    </BadgeLoaderStyled>
  );
};

export default BadgeLoader;
