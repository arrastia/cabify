import { Styles } from './Divider.styles';

type Props = { direction?: 'horizontal' | 'vertical' };

export const Divider = ({ direction = 'horizontal' }: Props) => <Styles.Divider direction={direction} />;
