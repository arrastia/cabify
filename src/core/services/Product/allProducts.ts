import { ProductRepository } from 'core/repositories/Product';

export const allProducts = async () => {
  return await ProductRepository.allProducts();
};
