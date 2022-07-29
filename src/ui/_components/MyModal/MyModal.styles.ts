import styled, { css } from 'styled-components';

import { fade } from 'ui/_styles/animations/fade';

const CloseButton = styled('button')``;

const sizes = css`
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const Mask = styled('div')`
  ${sizes}
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
`;

const Modal = styled('div')<{ animationStatus: 'enter' | 'leave' }>`
  ${sizes}
  position: fixed;
  animation: ${({ animationStatus }) =>
    css`
      ${fade[animationStatus]} both ${animationStatus === 'enter' ? 'ease-in' : 'ease-out'}
    `};
`;

export const Styles = { CloseButton, Modal, Mask };
