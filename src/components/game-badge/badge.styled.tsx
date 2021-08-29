import styled from 'styled-components';

interface IColor {
  color: string;
}

export const BadgeStyled = styled.div<IColor>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1000;
  margin: auto;
  background-color: var(--just-${props => props.color});
  border-radius: 50%;
  block-size: 130px;
  inline-size: 130px;
  cursor: pointer;
  user-select: none;
  &.is-blue {
    box-shadow: 0px 5px 0 #2a45c2;
  }
  &.is-yellow {
    box-shadow: #c76c1b 0 5px 0;
  }
  &:nth-child(3) {
    grid-column: span 2;
  }
  &.is-red {
    box-shadow: 0px 5px 0 #9d1634;
  }
  &.is-cyan {
    box-shadow: 0px 5px 0 #2d8dab;
  }
  &.is-purple {
    box-shadow: 0px 5px 0 #5f37a8;
  }
  img {
    position: relative;
    z-index: 10;
    pointer-events: none;
  }

  &::after {
    position: absolute;
    content: '';
    display: block;
    inline-size: 130px;
    block-size: 130px;
    background: #fff;
    border-radius: 50%;
    transform: scale(0);
    z-index: -1;
    opacity: 0.05;
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    &::after {
      transform: scale(1.9);
    }
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

  &:active {
    transform: scale(0.98);
  }
  @media screen and (min-width: 768px) {
    inline-size: 12.5rem;
    block-size: 12.5rem;
    .box {
      inline-size: 9.8rem;
      block-size: 9.8rem;
    }
    .box::before {
      inline-size: 9.8rem;
      block-size: 9.8rem;
      inset-block-start: 55%;
    }
  }
`;
