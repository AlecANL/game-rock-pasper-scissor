import styled from 'styled-components';

export const ScoreStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid rgba(255, 255, 255, 0.289199);
  border-radius: 5px;
  padding-block: 0.75rem;
  padding-inline-start: 1.5rem;
  padding-inline-end: 0.75rem;

  img {
    inline-size: 5.5rem;
    block-size: 3rem;
  }

  .user-score {
    background-color: var(--just-white);
    text-align: center;
    border-radius: 4px;
    padding-inline: 1.375rem;
    padding-block: 0.625rem;
    span {
      color: #2a45c2;
      font-size: 10px;
      line-height: 0.75rem;
      letter-spacing: 1.56px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.875rem;
    }
    h1 {
      font-size: 2.5rem;
      line-height: 2.5rem;
      font-weight: bold;
      color: #565468;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 1.5rem;
    border-radius: 1rem;
    img {
      inline-size: 10rem;
      block-size: 6rem;
    }
    .user-score {
      padding-inline: 1.5rem;
      border-radius: 8px;
      /* padding-block: 1rem; */
      h1 {
        font-size: 60px;
        line-height: 65px;
      }
    }
  }
`;
