import { Styles } from './ShoppingCart.styles';

import { Divider } from 'ui/components/Divider';
import { ProductList } from 'ui/components/ProductList';

export const ShoppingCart = () => {
  return (
    <Styles.View>
      <h1>Shopping cart</h1>
      <Divider />
      <ProductList />
    </Styles.View>
  );
};
