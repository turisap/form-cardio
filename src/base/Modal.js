import React, { useEffect } from 'react';
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

// TODO remove the class-based implementation of Modal when the application is ready

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.el = document.createElement('div');
//   }
//
//   componentDidMount() {
//     // The portal element is inserted in the DOM tree after
//     // the Modal's children are mounted, meaning that children
//     // will be mounted on a detached DOM node. If a child
//     // component requires to be attached to the DOM tree
//     // immediately when mounted, for example to measure a
//     // DOM node, or uses 'autoFocus' in a descendant, add
//     // state to Modal and only render the children when Modal
//     // is inserted in the DOM tree.
//     modalRoot.appendChild(this.el);
//     this.el.setAttribute('id', 'modal__container');
//   }
//
//   componentWillUnmount() {
//     modalRoot.removeChild(this.el);
//   }
//
//   render() {
//     return createPortal(
//         this.props.children,
//         this.el,
//     );
//   }
// }

export { Modal as default };
