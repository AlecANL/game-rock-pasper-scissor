import React from 'react';
import { ModalRulesStyled } from './modal-rules.styled';
import { useDispatch, useSelector } from 'react-redux';
import { showModalRules } from '../../redux/ui/ui.actions';

const ModalRules: React.FC = () => {
  const gameMode: string = useSelector((state: any) => state.ui.gameMode);
  const dispatch = useDispatch();
  const EasyModeImage = `${process.env.PUBLIC_URL}/images/image-rules.svg`;
  const AdvanceModeImage = `${process.env.PUBLIC_URL}/images/image-rules-bonus.svg`;

  function renderImage(): string {
    if (gameMode === 'hard') {
      return AdvanceModeImage;
    }
    return EasyModeImage;
  }

  function handleCloseModal() {
    dispatch(showModalRules(false));
  }

  return (
    <ModalRulesStyled>
      <p>rules</p>
      <img className="logo" src={renderImage()} alt="logo rules" />
      <img
        className="icon"
        src={`${process.env.PUBLIC_URL}/images/icon-close.svg`}
        alt="icon close"
        onClick={handleCloseModal}
      />
    </ModalRulesStyled>
  );
};

export default ModalRules;
