import styled from 'styled-components';

import type { DividerProps } from './@types/Divider.types';

const Divider = styled('hr')<DividerProps>`
  background-color: #dbdbe0;
  border: none;
  height: ${({ direction }) => (direction === 'horizontal' ? '1px' : '100%')};
  margin: ${({ direction }) => (direction === 'horizontal' ? '1rem 0' : '0 1rem')};
  width: ${({ direction }) => (direction === 'horizontal' ? '100%' : '1px')};
`;

export const Styles = { Divider };
