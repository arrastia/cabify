import { useRecoilValue } from 'recoil';

import { Styles } from './ProductList.styles';

import { ProductDetails } from './components/ProductDetails';
import { QuantitySelector } from '../QuantitySelector';

import { productState } from 'ui/stores/CheckoutStore';
import { ProductItem } from './components/ProductItem';

export const ProductList = () => {
  const products = useRecoilValue(productState);

  return (
    <Styles.Table as="table">
      <tr>
        <th>Product details</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>

      {products.map(item => (
        <ProductItem
          details={<ProductDetails code={item.code} name={item.name} src={item.picture} />}
          id={item.id}
          key={item.id}
          price={item.price}
          quantitySelector={<QuantitySelector item={item} productType={item.name} />}
        />
      ))}
    </Styles.Table>
  );
};
