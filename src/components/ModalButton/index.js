import React from 'react';

import Modal, { useModal } from '../Modal';


const ModalButton = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <button onClick={toggle}>use Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </>
  );
};

export default ModalButton;
