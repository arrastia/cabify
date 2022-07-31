import styled from 'styled-components';

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
  /* margin-left: 8px; */
  vertical-align: middle;
  width: auto;

  min-width: calc(50% - 8px);
  vertical-align: middle;

  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.97);
    transition: transform 0.1s ease-in;
  }

  &:disabled {
    background-color: #c6c6c6;
    box-shadow: none;
    color: #b3b3b3;
    cursor: not-allowed;
  }

  &.primary {
    background-color: #7145d6;
    box-shadow: 0 0 4px rgba(26, 26, 56, 0.08), 0 1px 2px rgba(26, 26, 56, 0.08);
    color: #fff;

    &:hover {
      background-color: #8c5cff;
      box-shadow: 0 0 4px rgb(26 26 56 / 8%), 0 2px 8px rgb(26 26 56 / 16%);
    }
  }

  &.secondary {
    background-color: #fff;
    box-shadow: 0 0 4px rgba(26, 26, 56, 0.08), 0 1px 2px rgba(26, 26, 56, 0.08);
  }

  &.transparent {
    background-color: transparent;
    color: #7145d6;
    min-width: fit-content;
    min-height: fit-content;
    padding: 0;
    box-shadow: none;
  }
`;

export const Styles = { Button };
