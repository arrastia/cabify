import { createGlobalStyle } from 'styled-components';

import { background } from 'assets/images';

export const GlobalStyles = createGlobalStyle`
    * { 
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      align-items: center;
      background-image: url(${background});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      flex-direction: column;
      font-family: Avenir, 'Roboto', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      height: 100vh;
      justify-content: center;
      margin: 0;
      transition: background-color 300ms ease-in-out;
      width: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    h1 {
      color: #1a1a38;
      font-size: 1.5rem;
      line-height: 32px;
      margin: 0;
    }

    h2 {
      font-size: 18px;
      font-weight: 900;
      letter-spacing: -0.01em;
      line-height: 24px;
      text-align: left;
    }

    p {
      font-size: 13px;
      font-weight: 400;
      letter-spacing: -0.01em;
      line-height: 18px;
      text-align: left;
    }
`;
