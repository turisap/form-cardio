import * as React from 'react';
import styled from 'styled-components';
import { Form } from 'react-advanced-form';
import Input from 'base/inputs/Input';

const StyledSignupFormContent = styled.div`
    border: ${props => props.theme.grey_border};
    background: ${props => props.theme.grey_background}
    padding: 20px;
    width: 700px;
    font-size: 1.2rem;
    & form {
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-gap: 30px;
    }
    
    & label {
        grid-column: 1 / 2;
        justify-self: right;
        align-self: center;
        margin-top: -.4rem;
    }
    
    & .input-content {
        grid-column: 2 / 3;
    }
    
    & input {
        width: 100%;
        height: 40px;
    }
    
    & button {
       grid-column: 2 / 3;
       width: 100%;
       padding: 20px;
       font-size: 1.3rem;
       text-transform: uppercase;
    }
`;

// TODO focus on hover
// TODO aria-busy usage on submit
// TODO show password btn
export const SignupFormContent = () => (
  <StyledSignupFormContent>
    <Form>
      <Input label="First Name" type="text" name="signup_firstName" required />
      <Input label="Last Name" type="text" name="signup_lastName" required />
      <Input label="Email" type="email" name="signup_email" required />
      <Input label="Password" type="password" name="signup_password" required />
      <Input
        label="Confirm Password"
        type="password"
        name="signup_confirm_password"
        required
      />
      <button>Sign up</button>
    </Form>
  </StyledSignupFormContent>
);
