import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'base/Modal';
import ContactUsFormContent from './ContactUsFormContent/ContactUsformContent';

const StyledContuctUsForm = styled.div``;

const ContactUsForm = () => {
  const [modalOpen, setModal] = useState(false);
  const toggleModal = () => setModal(!modalOpen);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const popTimeOut = setTimeout(() => toggleModal(), 200);
    return () => clearTimeout(popTimeOut);
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <StyledContuctUsForm>
      {modalOpen && (
        <Modal>
          <ContactUsFormContent closeHandler={() => setModal(false)} />
        </Modal>
      )}
    </StyledContuctUsForm>
  );
};

export { ContactUsForm as default };
