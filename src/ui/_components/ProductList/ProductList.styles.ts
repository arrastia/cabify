import styled from 'styled-components';
import { Column } from 'ui/_styles/components/Column';

const Table = styled(Column)`
  width: 100%;
  gap: 2rem;
  justify-content: space-between;

  tr {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  th {
    font-family: Avenir;
    /* font-size: 13px; */
    /* font-weight: 400; */
    letter-spacing: -0.01em;
    line-height: 18px;
    text-align: left;
    color: #b3b4be;
  }
`;

export const Styles = { Table };
