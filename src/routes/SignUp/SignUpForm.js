import * as React from 'react';
import styled from 'styled-components';
import { SignupFormContent } from './SignupFormContent/SignupFormContent';

const SignUpStyled = styled.div``;

const SignUpForm = () => {
  return (
    <SignUpStyled className="container">
      <SignupFormContent />
    </SignUpStyled>
  );
};

export default SignUpForm;
