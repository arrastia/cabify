import styled from 'styled-components';

const Layout = styled('main')`
  align-items: flex-start;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgb(255 255 255 / 31%);
  border-radius: 10px;
  box-shadow: 0 10px 70px 1px rgba(0, 0, 0, 0.56);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 70vh;
  justify-content: start;
  margin: auto;
  max-height: max-content;
  max-width: 1080px;
  overflow: hidden;
  position: relative;
  transition: all 300ms ease-in-out;
  user-select: none;
  width: 90vw;
  /* will-change: width height max-height max-width; */
  -webkit-backdrop-filter: blur(20px);

  @supports not (backdrop-filter: blur()) {
    background-color: rgb(255 255 255 / 31%);
  }
`;

const Main = styled('main')`
  display: flex;
  height: 100%;
`;

export const Styles = { Layout, Main };
