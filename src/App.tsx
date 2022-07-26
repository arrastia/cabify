import { Styles } from './App.styles';

import { logo } from 'assets/images';

export function App() {
  return (
    <Styles.App>
      <Styles.Header>
        <Styles.Logo alt="logo" className="App-logo" src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Styles.Link href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
          Learn React
        </Styles.Link>
      </Styles.Header>
    </Styles.App>
  );
}
