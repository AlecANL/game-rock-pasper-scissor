import styled, { css } from 'styled-components';

export const ModalStyled = styled.div`
  position: absolute;
  inset-inline-start: 50%;
  inset-block-start: 50%;
  padding: 1rem;
  background-color: var(--just-white);
  color: var(--text-color);
  border-radius: 0.5rem;
  inline-size: 80%;
  padding-inline: 1rem;
  transform: translate(-50%, -50%);
  p {
    margin-block-start: 0.5rem;
    margin-block-end: 2rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: bold;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    inline-size: 300px;
  }
`;

export const Button = styled.button<any>`
  inline-size: 100%;
  padding-block: 1rem;
  margin-block-end: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  text-transform: capitalize;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  ${secondary =>
    secondary &&
    css`
      background-color: var(--just-red);
      color: var(--just-white);
    `}

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--just-blue);
      color: var(--just-white);
    `}
`;
