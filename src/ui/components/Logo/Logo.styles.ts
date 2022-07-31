import styled from 'styled-components';

const Image = styled('img')`
  cursor: pointer;
  transition: transform 0.1s ease-in;
  user-select: none;
  width: 10vmin;

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }
`;

export const Styles = { Image };
