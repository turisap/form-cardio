import React, { useEffect, useState } from 'react';
import Modal from 'base/Modal';
import InvoiceFormContent from './InvoiceFormContent/InvoiceFormContent';

const ContactUsForm = () => {
  const [modalOpen, setModal] = useState(false);
  const toggleModal = () => setModal(!modalOpen);

  useEffect(() => {
    const popTimeOut = setTimeout(() => toggleModal(), 200);
    return () => clearTimeout(popTimeOut);
  }, []);

  return (
    <Modal>
      <InvoiceFormContent />
    </Modal>
  );
};

export { ContactUsForm as default };
