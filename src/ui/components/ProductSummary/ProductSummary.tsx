import { useRecoilValue } from 'recoil';

import { allProductsState, allState, selectorState } from 'ui/stores/CheckoutStore';

type Props = {};

export const ProductSummary = (props: Props) => {
  const items = useRecoilValue(allState);

  console.log('items :>> ', items);

  return (
    <div>
      <h3>{items.length} Items</h3>
      <p>Total price: </p>
    </div>
  );
};
