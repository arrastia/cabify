import { atom, atomFamily, selector } from 'recoil';

import type { Product } from 'core/entities/Product';
import { ProductService } from 'core/services/Product';

export const cartItemsState = atom({
  key: 'cartItemsState',
  default: []
});

export const cartProductState = atomFamily({
  key: 'cartProductState',
  default: () => ({ category: '', description: '', id: '', image: '', name: '', price: 0, quantity: 0 })
});

export const productState = selector({
  key: 'productState',
  get: async () => await ProductService.allProducts()
});
