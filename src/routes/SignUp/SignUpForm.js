import * as React from 'react';
import styled from 'styled-components';
import { SignupFormContent } from './SignupFormContent/SignupFormContent';

const SignUpStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const SignUpForm = () => {
  return (
    <SignUpStyled>
      <SignupFormContent />
    </SignUpStyled>
  );
};

export default SignUpForm;
