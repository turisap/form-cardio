import * as React from 'react';
import styled from 'styled-components';
import { Form } from 'react-advanced-form';
import Input from 'base/inputs/Input';

const StyledSignupFormContent = styled.div`
    // border: ${props => props.theme.grey_border};
    // background: ${props => props.theme.grey_background}
`;

// TODO focus on hover
// TODO aria-busy usage on submit
// TODO show password btn
export const SignupFormContent = () => (
  <StyledSignupFormContent>
    <Form>
      <Input label="First Name" type="text" name="FirstName" required />
    </Form>
  </StyledSignupFormContent>
);
