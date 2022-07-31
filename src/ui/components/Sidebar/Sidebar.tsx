import { Styles } from './Sidebar.styles';

import { Button } from 'ui/components/Button';
import { Divider } from 'ui/components/Divider';
import { ProductSummary } from 'ui/components/ProductSummary';

export const Sidebar = () => {
  return (
    <Styles.Sidebar as="aside" isVisible={true}>
      <h2>Order summary</h2>
      <Divider />
      <ProductSummary />
      <Divider />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur.
        Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.
      </p>
      <Button label="Checkout" />
    </Styles.Sidebar>
  );
};
