import styled, { keyframes } from 'styled-components';

const Button = styled('button')`
  align-items: center;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translateZ(0);
  transition: all 0.3s linear;

  min-height: 56px;
  min-width: 96px;
  padding: 0 24px;

  font-size: 16px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.5;

  background-color: #7145d6;
  box-shadow: 0 0 4px rgba(26, 26, 56, 0.08), 0 1px 2px rgba(26, 26, 56, 0.08);
  color: #fff;

  display: inline-flex;
  margin-left: 8px;
  vertical-align: middle;
  width: auto;

  min-width: calc(50% - 8px);
  vertical-align: middle;
`;

const key = keyframes`

`;

export const Styles = { Button };
