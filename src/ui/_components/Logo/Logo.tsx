import { Styles } from './Logo.styles';

import { logo } from 'assets/images';
import { useFountain } from 'ui/_tools/hooks/useFountain';

interface LogoProps {
  onClick?: () => void;
}

export const Logo = ({ onClick }: LogoProps) => {
  const ref = useFountain(logo) as React.RefObject<HTMLImageElement>;

  return <Styles.Image alt="logo" ref={ref} src={logo} />;
};
