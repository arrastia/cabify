import { useSetRecoilState } from 'recoil';
import { Logo } from '../Logo';

import { Styles } from './Header.styles';

export const Header = () => {
  return (
    <Styles.Header>
      <Logo></Logo>
      <Styles.ActionButtons></Styles.ActionButtons>
    </Styles.Header>
  );
};
