import { productsWebConfig } from 'configuration/www/Products';

import { HTTPUtils } from 'core/_tools/HTTPUtils';
import { URLUtils } from 'core/_tools/URLUtils';

import type { Product } from 'core/entities/Product';

const { get } = HTTPUtils;
const { parseURL } = URLUtils;

const allProducts = async (): Promise<Product[]> => {
  const { data } = await get({ url: parseURL({ url: productsWebConfig.all }) });

  return data;
};

export const ProductRepository = { allProducts };
