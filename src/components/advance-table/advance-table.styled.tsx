import styled from 'styled-components';

export const AdvanceTableStyled = styled.section`
  max-inline-size: 19.4375rem;
  position: relative;
  block-size: 300px;
  inline-size: 100%;
  align-self: center;
  & > div {
    position: absolute;
    inline-size: 5.9375rem;
    block-size: 5.9375rem;
    align-self: center;
    img {
      inline-size: 2.5rem;
      block-size: 2.5rem;
    }
    .box,
    .box::before {
      inline-size: 4.625rem;
      block-size: 4.625rem;
    }
  }
  & > div:nth-child(1) {
    inset-inline-start: 50%;
    transform: translateX(-50%);
  }
  & > div:nth-child(2) {
    inset-block-start: 5rem;
  }
  & > div:nth-child(3) {
    inset-inline-end: 0;
    inset-block-start: 5rem;
  }
  & > div:nth-child(4) {
    inset-block-end: 0;
    inset-inline-start: 2rem;
  }
  & > div:nth-child(5) {
    inset-block-end: 0;
    inset-inline-end: 2rem;
  }
  @media screen and (min-width: 1024px) {
    max-inline-size: 31.25rem;
    block-size: 28rem;
    & > div {
      position: absolute;
      inline-size: 9.375rem;
      block-size: 9.375rem;
      align-self: center;
      img {
        inline-size: 2.8125rem;
        block-size: 2.8125rem;
      }
      .box,
      .box::before {
        inline-size: 6.875rem;
        block-size: 6.875rem;
      }
    }

    & > div:nth-child(2) {
      inset-block-start: 6.5rem;
    }
    & > div:nth-child(3) {
      inset-block-start: 6.5rem;
    }
    & > div:nth-child(4) {
      inset-inline-start: 3.5rem;
    }
    & > div:nth-child(5) {
      inset-inline-end: 3.5rem;
    }
  }
`;
