import { useRecoilValue } from 'recoil';

import { allProductsState } from 'ui/stores/CheckoutStore';

type Props = {};

export const Summary = (props: Props) => {
  const items = useRecoilValue(allProductsState);

  return (
    <div>
      <h3>{items} Items</h3>
      <p>Total price: </p>
    </div>
  );
};
