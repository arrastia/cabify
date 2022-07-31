import styled from 'styled-components';

const ActionButtons = styled('div')`
  display: flex;
  gap: 0.5rem;
  margin: 1rem;
`;

const Header = styled('header')`
  align-items: center;
  border-bottom: 1px solid #dbdbe0;
  display: flex;
  flex-shrink: 0;
  height: 58px;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;

  & .avatar {
    @media screen and (min-width: 945px) {
      display: none;
    }
  }
`;

export const Styles = { ActionButtons, Header };
