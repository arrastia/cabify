import { useRecoilValue } from 'recoil';
import { productQuantityState } from 'ui/stores/CheckoutStore';

interface ProductItemProps {
  details: JSX.Element;
  id: string;
  price: number;
  quantitySelector: JSX.Element;
}

export const ProductItem = ({ details, price, quantitySelector, id }: ProductItemProps) => {
  const quantity = useRecoilValue(productQuantityState(id));

  return (
    <tr>
      <td>{details}</td>
      <td>{quantitySelector}</td>
      <td>{price}</td>
      <td>{price * quantity}</td>
    </tr>
  );
};
