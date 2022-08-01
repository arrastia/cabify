import { atom, atomFamily, selector } from 'recoil';

import { ProductService } from 'core/services/Product';
import type { Category } from 'core/entities/Product/Product';

export const allProductsState = atom<number>({
  key: 'allProductsState',
  default: 0
});

export const productQuantityState = atomFamily({
  key: 'productQuantityState',
  default: () => 0
});

export const previousQuantityState = selector({
  key: 'previousQuantityState',
  get:
    ({ get }) =>
    (category: Category) => {
      const productId = get(productQuantityState(category));

      return productId;
    }
});

export const productState = selector({
  key: 'productState',
  get: async () => await ProductService.allProducts()
});
