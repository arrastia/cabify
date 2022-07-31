type ButtonCategory = 'primary' | 'secondary' | 'transparent';

export interface ButtonProps {
  category?: ButtonCategory;
  isDisabled?: boolean;
  label: string;
  onClick?: () => void;
}
