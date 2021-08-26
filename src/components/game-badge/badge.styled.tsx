import styled from 'styled-components';

export const BadgeStyled = styled.div`
  /* block-size: 8.4375rem; */
  outline: 1px solid red;
  block-size: 130px;
  inline-size: 130px;

  &:last-child {
    grid-column: span 2;
    outline: 1px solid blue;
  }
`;
