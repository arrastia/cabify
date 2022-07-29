import styled from 'styled-components';
import { Column } from 'ui/_styles/components/Column';
import { Row } from 'ui/_styles/components/Row';
import { MORADUL } from 'ui/_styles/themes/colors.theme';

const Container = styled(Row)``;

const Details = styled(Column)``;

const ProductType = styled('h2')`
  color: ${MORADUL};
`;

export const Styles = { ProductType, Container, Details };
