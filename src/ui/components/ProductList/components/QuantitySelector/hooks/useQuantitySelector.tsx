import { useRecoilCallback, useRecoilValue, DefaultValue } from 'recoil';

import { allProductsState, productQuantityState } from 'ui/stores/CheckoutStore';

import type { Category } from 'core/entities/Product/Product';
import type { ChangeEvent, KeyboardEvent } from 'react';

type SelectorActions = 'increase' | 'decrease';

export const useQuantitySelector = (productCategory: Category) => {
  const quantity = useRecoilValue(productQuantityState(productCategory));

  const updateCounter = useRecoilCallback(
    ({ set }) =>
      (action: SelectorActions) => {
        set(productQuantityState(productCategory), prev => (action === 'increase' ? prev + 1 : prev - 1));
        set(allProductsState, prev => (action === 'increase' ? prev + 1 : prev - 1));
      },
    []
  );

  const setCustomValue = useRecoilCallback(
    ({ set }) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        const re = /^[0-9\b]+$/;
        // if (re.test(event.target.value)) {
        // const a = event.target.value.replace(/\D/g, '');
        set(productQuantityState(productCategory), () => event.target.valueAsNumber);
        // set(allProductsState, prev => (action === 'increase' ? prev + 1 : prev - 1));
        // }
      },
    []
  );

  const resetStates = useRecoilCallback(
    ({ reset }) =>
      (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Escape') {
          reset(productQuantityState(productCategory));
        }
      },
    []
  );

  const decreaseCounter = () => updateCounter('decrease');

  const increaseCounter = () => updateCounter('increase');

  return { decreaseCounter, increaseCounter, quantity, setCustomValue, resetStates };
};
