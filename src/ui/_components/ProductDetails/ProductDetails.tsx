import React from 'react';
import { Modal } from '../Modal';
import { Styles } from './ProductDetails.styles';

type Props = {
  src: string;
  name: string;
  code: string;
};

export const ProductDetails = ({ code, name, src }: Props) => {
  return (
    <>
      <Styles.Container>
        <img src={src} alt="" />
        <Styles.Details>
          <Styles.ProductType>{name}</Styles.ProductType>
          <p>Product code: {code}</p>
        </Styles.Details>
      </Styles.Container>

      <Modal
        animation={'door'}
        cancelLabel={''}
        className={''}
        closeMaskOnClick={false}
        closeOnEsc={false}
        confirmButtonType={'delete'}
        confirmLabel={''}
        customMaskStyles={''}
        customStyles={''}
        duration={0}
        enterAnimation={''}
        height={0}
        isDisabled={false}
        leaveAnimation={''}
        leftSideFooter={undefined}
        measure={''}
        modalTitle={''}
        onAnimationEnd={function (): void {
          throw new Error('Function not implemented.');
        }}
        onClose={() => {}}
        onConfirm={function (): void {
          throw new Error('Function not implemented.');
        }}
        showCloseButton={false}
        showMask={false}
        visible={false}
        width={0}>
        <div>hola</div>
      </Modal>
    </>
  );
};
