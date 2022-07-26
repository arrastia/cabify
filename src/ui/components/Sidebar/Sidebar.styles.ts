import styled from 'styled-components';

import { Column } from 'ui/styles/components/Column';

const Sidebar = styled(Column)<{ isVisible: boolean }>`
  border-left: 1px solid #dbdbe0;

  flex-basis: 312px;
  flex-shrink: 0;
  overflow: auto;
  padding: 1.5rem;
  box-shadow: 0 0 0 1px 'rgba(0, 0, 0, 0.1)';
  position: relative;
  transition: right 300ms ease-in-out;
  right: ${({ isVisible }) => (isVisible ? '0' : '-300px')};

  /* @media screen and (max-width: 945px) {
    display: none;
  } */
`;

const SidebarButtons = styled('div')`
  align-items: center;
  background-color: var(--large-title-bg);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const ThemeTools = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Styles = { Sidebar, SidebarButtons, ThemeTools };
