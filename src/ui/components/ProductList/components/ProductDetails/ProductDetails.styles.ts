import styled from 'styled-components';

import { MORADUL } from 'ui/styles/themes/colors.theme';

import { Column } from 'ui/styles/components/Column';
import { Row } from 'ui/styles/components/Row';

const Container = styled(Row)`
  cursor: pointer;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.97);
    transition: transform 0.1s ease-in;
  }
`;

const Details = styled(Column)``;

const ProductType = styled('h2')`
  color: ${MORADUL};
`;

export const Styles = { ProductType, Container, Details };
