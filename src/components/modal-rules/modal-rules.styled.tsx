import styled from 'styled-components';

export const ModalRulesStyled = styled.div`
  position: absolute;
  inset-inline: 0;
  inset-block: 0;
  border-radius: 8px;
  inline-size: 100%;
  block-size: 100%;
  background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.1875rem;
  .icon {
    cursor: pointer;
  }
  p {
    text-transform: uppercase;
    line-height: 2rem;
    font-size: 2rem;
    font-weight: bold;
    color: #3b4262;
  }

  img {
    max-inline-size: 100%;
  }
  @media screen and (min-width: 480px) {
    max-inline-size: 25rem;
    max-block-size: 28.75rem;
    inset-inline-start: 50%;
    inset-block-start: 50%;
    transform: translate(-50%, -50%);
    gap: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 1fr;
    .logo {
      grid-column: 1 / span 3;
      grid-row: 2 / 3;
      justify-self: center;
    }
    .icon {
      grid-column: 3 / 4;
      justify-self: end;
      padding-inline-end: 1rem;
    }
    p {
      padding-inline-start: 1rem;
    }
  }
`;
