import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'base/Modal';

const StyledContuctUsForm = styled.div``;

const ContactUsForm = () => {
  const [modalOpen, setModal] = useState(false);
  const toggleModal = () => setModal(!modalOpen);

  useEffect(() => {
    setTimeout(() => toggleModal(), 1000);
  }, []);
  return (
    <StyledContuctUsForm>
      {modalOpen && (
        <Modal>
          <p>trufel</p>
        </Modal>
      )}
    </StyledContuctUsForm>
  );
};

export { ContactUsForm as default };
