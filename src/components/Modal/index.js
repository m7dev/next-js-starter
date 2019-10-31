import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import css from './styles.less';


export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className={css.modal_overlay} />
    <div className={css.modal_wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className={css.modal}>
        <div className={css.modal_header}>
          <button type="button" className={css.modal_close_button} data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p>
        Hello, I&#39;m a modal.
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;
