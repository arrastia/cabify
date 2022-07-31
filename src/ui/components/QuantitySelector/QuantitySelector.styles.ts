import styled from 'styled-components';

import { Row } from 'ui/styles/components/Row';

const Container = styled(Row)``;

const Input = styled('input')`
  width: 2.5rem;
  height: 2rem;
  display: flex;
  padding: 0.5rem;
  border: 0.15rem solid;
  border-color: #dbdbe0;

  border-radius: 5px;
  -webkit-appearance: none;
  transition: border-color 300ms ease-in-out;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:focus-visible {
    outline: none;
    border-color: #00bcd4;
    transition: border-color 300ms ease-in-out;
  }
`;

export const Styles = { Container, Input };
