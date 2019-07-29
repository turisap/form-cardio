import * as React from 'react';
import styled from 'styled-components';
import { SignupFormContent } from './SignupFormContent/SignupFormContent';

const SignUpStyled = styled.div`
  height: 100%;
`;

const SignUpForm = () => {
  return (
    <SignUpStyled className="container">
      <SignupFormContent />
    </SignUpStyled>
  );
};

export default SignUpForm;
