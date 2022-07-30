import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Styles } from './Modal.styles';

import { Button } from 'ui/_components/Button';

import type { ModalProps } from './@types/Modal.types';
import type { RefObject } from 'react';

const modalsPortal = document.getElementById('modals') as HTMLElement;

export const Modal = ({ children, isVisible, onClose }: ModalProps) => {
  const [animationStatus, setAnimationStatus] = useState<'enter' | 'leave'>('leave');
  const [isDialogMounted, setIsDialogMounted] = useState(false);

  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    isVisible ? onEnter() : onLeave();
  }, [isVisible]);

  const onAnimationEnd = () => (animationStatus === 'leave' ? setIsDialogMounted(false) : modalRef.current?.focus());

  const onEnter = () => {
    setIsDialogMounted(true);
    setAnimationStatus('enter');
  };

  const onLeave = () => setAnimationStatus('leave');

  const renderModal = () => (
    <Styles.Modal animationStatus={animationStatus} onAnimationEnd={onAnimationEnd} ref={modalRef} tabIndex={-1}>
      <Styles.Mask onClick={onClose} />
      <Styles.Dialog animationStatus={animationStatus} className={animationStatus}>
        <Styles.CloseButton onClick={onClose} tabIndex={0} />
        <Styles.Content>
          <Styles.Title>{'Title'}</Styles.Title>
          {children}
        </Styles.Content>
        <Styles.Footer>
          <Styles.ButtonWrapper>
            <Button category={'transparent'} label={'Cancel'} onClick={onClose} />
            <Button category={'primary'} label={'Confirm'} />
          </Styles.ButtonWrapper>
        </Styles.Footer>
      </Styles.Dialog>
    </Styles.Modal>
  );

  return createPortal(isDialogMounted ? renderModal() : null, modalsPortal);
};
