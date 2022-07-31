import { Styles } from './Logo.styles';

import { logo } from 'assets/images';

import { useFountain } from 'ui/hooks/useFountain';

export const Logo = () => {
  const ref = useFountain<HTMLImageElement>(logo);

  return <Styles.Image alt="logo" ref={ref} src={logo} />;
};
