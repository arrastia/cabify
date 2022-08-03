import { useRecoilValue } from 'recoil';

import { Styles } from './ProductList.styles';

import { ProductDetails } from './components/ProductDetails';
import { ProductItem } from './components/ProductItem';
import { QuantitySelector } from './components/QuantitySelector';

import { productState } from 'ui/stores/CheckoutStore';

export const ProductList = () => {
  const products = useRecoilValue(productState);

  return (
    <Styles.Table as="table">
      <thead>
        <tr>
          <th>Product details</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {products.map(item => (
          <ProductItem
            details={<ProductDetails code={item.code} name={item.name} src={item.picture} />}
            id={item.id}
            key={item.id}
            price={item.price}
            quantitySelector={<QuantitySelector productCategory={item.category} />}
          />
        ))}
      </tbody>
    </Styles.Table>
  );
};
