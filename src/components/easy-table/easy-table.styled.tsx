import styled from 'styled-components';

export const EasyTableStyled = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: 130px 130px;
  column-gap: 3.125rem;
  row-gap: 1rem;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 230px 230px;
  }
`;
