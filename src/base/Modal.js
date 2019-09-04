/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
/* eslint-enable no-unused-vars */
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = props => {
  const element = document.createElement('div');
  element.setAttribute('id', 'modal__container');

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  });

  return createPortal(props.children, element);
};

export { Modal as default };
