import * as React from 'react';
import styled from 'styled-components';
import { SignupFormContent } from './SignupFormConent/SignupFormContent';

const SignUpStyled = styled.div`
  width: 100%;
  height: 100%;
`;

const SignUpForm = () => {
  return (
    <SignUpStyled>
      <SignupFormContent />
    </SignUpStyled>
  );
};

export default SignUpForm;
