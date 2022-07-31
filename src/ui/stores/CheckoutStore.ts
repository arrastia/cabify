import { atom, atomFamily, selector } from 'recoil';

import { ProductService } from 'core/services/Product';
import type { Product } from 'core/entities/Product';

// import type { Product } from 'core/entities/Product';

export const allProductsState = atom<number>({
  key: 'allProductsState',
  default: 0
});

export const allState = atom<Product[]>({
  key: 'allState',
  default: []
});

export const selectorState = selector({
  key: 'selectorState',
  get:
    ({ get }) =>
    (key: string) => {
      const all = get(allState);

      const test = groupByKey(all, 'code')[key];

      return test;
    }
});

export const productQuantityState = atomFamily({
  key: 'productQuantityState',
  default: () => 0
});

export const productState = selector({
  key: 'productState',
  get: async () => await ProductService.allProducts()
});

function groupByKey<T>(array: T[], key: keyof T) {
  return array.reduce((hash: any, obj: any) => {
    if (obj[key] === undefined) return hash;

    return Object.assign(hash, { [obj[key]]: (hash[obj[key]] || []).concat(obj) });
  }, {});
}
