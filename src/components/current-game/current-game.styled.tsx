import styled, { css } from 'styled-components';

interface IActive {
  showResults: string | null;
}

export const GameOptionsStyled = styled.div<IActive>`
  display: grid;
  grid-template-columns: 130px 130px;
  column-gap: 3.125rem;
  row-gap: 2.1875rem;
  justify-content: center;
  h2 {
    font: var(--mobileThirdHeadlineBold);
    margin-block-start: 0;
    margin-block-end: 1rem;
    text-transform: uppercase;
  }
  .option {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
      text-transform: uppercase;
    }
  }
  .option.computed-win > div {
    box-shadow: 0 0 0 18px hsl(0deg 0% 100% / 3%),
      0 0 0 51px hsl(0deg 0% 100% / 3%), 0 0 0 83px hsl(0deg 0% 100% / 3%);
  }
  .option.user-win > div {
    box-shadow: 0 0 0 18px hsl(0deg 0% 100% / 3%),
      0 0 0 51px hsl(0deg 0% 100% / 3%), 0 0 0 83px hsl(0deg 0% 100% / 3%);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 230px 230px 230px;
    grid-template-areas: 'option1 results option2';

    .option {
      gap: 3.75rem;
    }
    .option.computed-win > div {
      box-shadow: 0 0 0 64px hsl(0deg 0% 100% / 3%),
        0 0 0 120px hsl(0deg 0% 100% / 3%), 0 0 0 202px hsl(0deg 0% 100% / 3%);
    }
    .option.user-win > div {
      box-shadow: 0 0 0 64px hsl(0deg 0% 100% / 3%),
        0 0 0 120px hsl(0deg 0% 100% / 3%), 0 0 0 202px hsl(0deg 0% 100% / 3%);
    }
    .option > div {
      inline-size: 18.4375rem;
      block-size: 18.75rem;
      order: 3;
      .box,
      .box::before {
        inline-size: 14.0625rem;
        block-size: 14.0625rem;
      }
      img {
        inline-size: 6.875rem;
        block-size: 6.875rem;
      }
    }
    .option:nth-child(1) {
      grid-area: option1;
    }
    .option:nth-child(2) {
      grid-area: option2;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(1, 293px);
    grid-template-rows: 395px;
    place-items: center;
    ${({ showResults }) =>
      showResults &&
      css`
        grid-template-columns: repeat(3, 293px);
      `}
  }
`;

export const TableInGameStyled = styled.div`
  text-align: center;
`;

export const MessageStyled = styled.div`
  grid-column: span 2;
  justify-self: center;
  @media screen and (min-width: 768px) {
    grid-area: results;
    align-self: center;
  }
`;
