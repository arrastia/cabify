import { Styles } from './Button.styles';

import type { ButtonProps } from './@types/Button.types';

export const Button = ({ isDisabled, category = 'primary', label, onClick }: ButtonProps) => (
  <Styles.Button className={category} disabled={isDisabled} onClick={onClick}>
    {label}
  </Styles.Button>
);
