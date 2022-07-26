import { Styles } from './App.styles';

import { logo } from 'assets/images';
import { Logo } from 'ui/_components/Logo';

export function App() {
  return (
    <Styles.App>
      <Styles.Header>
        <Logo />
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
