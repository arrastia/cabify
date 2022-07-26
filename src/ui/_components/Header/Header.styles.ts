import styled from 'styled-components';

const ActionButtons = styled('div')`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const Header = styled('header')`
  align-items: center;
  border-bottom: 1px solid #dbdbe0;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  height: 58px;
  padding: 0 1rem;
  /* white-space: nowrap; */
  width: 100%;

  & .avatar {
    @media screen and (min-width: 945px) {
      display: none;
    }
  }
`;

export const Styles = { ActionButtons, Header };
