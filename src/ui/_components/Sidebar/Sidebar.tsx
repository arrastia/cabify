import { Suspense } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';

import { Styles } from './Sidebar.styles';

import { routes } from 'configuration/routes';

import { Button } from 'ui/_components/Button';
import { cartItemsState } from 'ui/_tools/Stores/CheckoutStore';
import { Divider } from '../Divider/Divider';

export const Sidebar = () => {
  const navigate = useNavigate();

  const items = useRecoilValue(cartItemsState);

  return (
    <Styles.Sidebar as="aside" isVisible={true}>
      <h2>Order summary</h2>
      <Divider />
      <h3>{items.length} Items</h3>
      <p>Total price: </p>
      <Divider />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur.
        Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.
      </p>
      <Button label="Checkout" />
    </Styles.Sidebar>
  );
};
