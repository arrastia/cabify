import { Fragment, useState } from 'react';

import { Styles } from './ProductDetails.styles';

import { Modal } from 'ui/components/Modal';

type Props = {
  code: string;
  name: string;
  src: string;
};

export const ProductDetails = ({ code, name, src }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Fragment>
      <Styles.Container onClick={() => setIsVisible(true)}>
        <img alt="" src={src} />
        <Styles.Details>
          <Styles.ProductType>{name}</Styles.ProductType>
          <p>Product code: {code}</p>
        </Styles.Details>
      </Styles.Container>

      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <div>Hola</div>
      </Modal>
    </Fragment>
  );
};
