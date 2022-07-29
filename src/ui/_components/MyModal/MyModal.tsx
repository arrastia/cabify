import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Styles } from './MyModal.styles';

import type { AnimationEvent, KeyboardEvent, MouseEvent, ReactNode, RefObject } from 'react';

const modalsPortal = document.getElementById('modals') as HTMLElement;

type ClickEvent = KeyboardEvent | MouseEvent;

interface Props {
  children: ReactNode;
  onClose: (event?: ClickEvent) => void;
  isVisible: boolean;
}

export const MyModal = ({ children, isVisible, onClose }: Props) => {
  //   const [animationStatus, setAnimationStatus] = useState<'enter' | 'leave'>('leave');
  //   const [isVisible, setIsVisible] = useState(false);

  const animationStatus: 'enter' | 'leave' = isVisible ? 'enter' : 'leave';

  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  const onAnimationEnd = (event: AnimationEvent) => {
    return animationStatus === 'leave' ? onClose() : null;
  };

  //   const onClose = (event: ClickEvent) => null;

  const onKeyUp = (event: KeyboardEvent) => {
    // if (!event.key !== '') return;

    onClose(event);
  };

  const onOpen = () => {
    // setAnimationStatus('enter');
    // setIsVisible(true);
  };

  const renderModal = () => (
    <Styles.Modal animationStatus={animationStatus} onAnimationEnd={onAnimationEnd} ref={modalRef} tabIndex={-1}>
      <Styles.Mask onClick={onClose} />
      <dialog>
        <Styles.CloseButton onClick={onClose} tabIndex={0} />
        {children}
      </dialog>
    </Styles.Modal>
  );

  return createPortal(isVisible ? renderModal() : null, modalsPortal);
};
