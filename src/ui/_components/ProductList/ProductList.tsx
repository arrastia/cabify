import { Styles } from './ProductList.styles';

import { ProductDetails } from '../ProductDetails';
import { QuantitySelector } from '../QuantitySelector';
import { useRecoilValue } from 'recoil';
import { productState } from 'ui/_tools/Stores/CheckoutStore';

type Props = {};

export const ProductList = (props: Props) => {
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
        <tr key={item.id}>
          <td>
            <ProductDetails code={item.code} name={item.name} src={item.picture} />
          </td>
          <td>
            <QuantitySelector />
          </td>
          <td>{item.price}</td>
          <td>60€</td>
        </tr>
      ))}
    </Styles.Table>
  );
};
