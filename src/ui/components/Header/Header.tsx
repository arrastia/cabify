import { Styles } from './Header.styles';

import { Logo } from 'ui/components/Logo';

export const Header = () => (
  <Styles.Header>
    <Logo />

    <Styles.ActionButtons>{/* <Button label="Log in"></Button> */}</Styles.ActionButtons>
  </Styles.Header>
);
