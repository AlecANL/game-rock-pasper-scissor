import styled, { keyframes, css } from 'styled-components';

interface IGameMode {
  gameMode: string;
}

export const LoaderAnimation = keyframes`
 25% {
     background-color: var(--just-blue);
 }
 60% {
    background-color: var(--just-yellow);
 }
 100% { 
     background-color: var(--just-red);
  }
`;

export const LoaderAnimationAdvance = keyframes`
 0% {
     background-color: var(--just-blue);
 }
 25% {
    background-color: var(--just-yellow);
 }
 50% { 
     background-color: var(--just-red);
  }
  75% {
     background-color: var(--just-cyan);

  }
  100% {
     background-color: var(--just-purple);

  }
`;

export const BadgeLoaderStyled = styled.div<IGameMode>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1000;
  margin: auto;
  border-radius: 50%;
  block-size: 130px;
  inline-size: 130px;
  cursor: pointer;
  user-select: none;
  ${({ gameMode }) =>
    gameMode === 'easy'
      ? css`
          animation: ${LoaderAnimation} 0.6s infinite forwards;
        `
      : css`
          animation: ${LoaderAnimationAdvance} 0.6s infinite forwards;
        `}
  /* animation: ${LoaderAnimation} 0.6s infinite forwards; */
  img {
    position: relative;
    z-index: 10;
    pointer-events: none;
  }
  .box {
    position: absolute;
    inline-size: 6.25rem;
    block-size: 6.25rem;
    border-radius: 50%;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translate(-50%, -50%);
    background-color: #babfd4;
    overflow: hidden;
  }
  .box::before {
    position: absolute;
    content: '';
    inline-size: 6.25rem;
    block-size: 6.25rem;
    background-color: var(--just-white);
    border-radius: 50%;
    inset-block-start: 55%;
    inset-inline-start: 50%;
    transform: translate(-50%, -50%);
  }
`;
