import { Styles } from './ShoppingCart.styles';

import { Button } from 'ui/_components/Button';
import { QuantitySelector } from 'ui/_components/QuantitySelector';
import { Table } from 'ui/_components/Table';
import { ProductList } from 'ui/_components/ProductList';
import { Divider } from 'ui/_components/Divider/Divider';
import { ProductService } from 'core/services/Product';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { productState } from 'ui/_tools/Stores/CheckoutStore';

export const ShoppingCart = () => {
  return (
    <Styles.View>
      <h1>Shopping cart</h1>
      <Divider />
      <ProductList></ProductList>
      {/* <p>
        
      </p>
      <QuantitySelector></QuantitySelector> */}
    </Styles.View>
  );
};
