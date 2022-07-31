import { useRecoilValue } from 'recoil';

import { productQuantityState } from 'ui/stores/CheckoutStore';

type Props = {
  type: string;
};

export const Another = ({ type }: Props) => {
  const quantity = useRecoilValue(productQuantityState(type));

  return <div>{quantity}</div>;
};
