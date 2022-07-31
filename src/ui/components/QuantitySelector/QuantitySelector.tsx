import { useRef } from 'react';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';

import { Styles } from './QuantitySelector.styles';

import { Button } from '../Button';

import { allProductsState, allState, productQuantityState, selectorState } from 'ui/stores/CheckoutStore';

import type { Product } from 'core/entities/Product';

type Props = {
  productType: string;
  item: Product;
};

export const QuantitySelector = ({ item, productType }: Props) => {
  const [quantity, setQuantity] = useRecoilState(productQuantityState(productType));
  const value = useRecoilValue(selectorState);

  const updateCounter = useRecoilCallback(
    ({ set, snapshot }) =>
      (action: string) => {
        const prevQuantity = snapshot.getLoadable(productQuantityState(productType)).contents;

        set(productQuantityState(productType), prev => (action === 'increase' ? prev + 1 : prev - 1));
        // set(allProductsState, prev => (action === 'increase' ? prev + (prevQuantity + 1) : prev - (prevQuantity - 1)));
        set(allState, prev => {
          const newTiem = prev.slice(-1);
          console.log('newTiem :>> ', newTiem);
          return action === 'increase' ? [...prev, item] : prev.slice(-1);
        });
        // set(allState, prev => {
        //   const newItem = { ...item, id: `${item.id}_${prev.length}` };

        //   if (action === 'increase') {
        //     return [...prev, newItem];
        //   } else {
        //     return prev.filter(i => i.id !== newItem.id);
        //   }
        // });
      },
    []
  );

  const inputRef = useRef<HTMLInputElement>(null);

  console.log('quantity :>> ', quantity);

  return (
    <Styles.Container>
      <Button category="transparent" label="-" onClick={() => updateCounter('decrease')}></Button>
      <Styles.Input min="0" ref={inputRef} type="number" value={quantity} />
      <Button category="transparent" label="+" onClick={() => updateCounter('increase')}></Button>
    </Styles.Container>
  );
};
