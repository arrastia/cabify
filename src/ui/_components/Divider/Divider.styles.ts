import styled from 'styled-components';

const Divider = styled('hr')<{ direction: 'horizontal' | 'vertical' }>`
  background-color: #dbdbe0;
  height: ${({ direction }) => (direction === 'horizontal' ? '1px' : '100%')};
  width: ${({ direction }) => (direction === 'horizontal' ? '100%' : '1px')};
  border: none;
  margin: ${({ direction }) => (direction === 'horizontal' ? '1rem 0' : '0 1rem')};
`;

export const Styles = { Divider };
