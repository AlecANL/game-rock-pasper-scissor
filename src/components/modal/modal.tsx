import React from 'react';
import { Button, ModalStyled } from './modal.styled';
import { useDispatch } from 'react-redux';
import { setGameMode } from '../../redux/ui/ui.actions';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  function handleGameMode(mode: string) {
    dispatch(setGameMode(mode));
  }
  return (
    <ModalStyled>
      <p>choice your level game</p>
      <Button primary onClick={() => handleGameMode('easy')}>
        easy mode
      </Button>
      <Button secondary onClick={() => handleGameMode('hard')}>
        advance mode
      </Button>
    </ModalStyled>
  );
};

export default Modal;
