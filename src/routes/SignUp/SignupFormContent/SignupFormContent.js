import * as React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Form } from 'react-advanced-form';
import Input from 'base/inputs/Input';

const StyledSignupFormContent = styled.div`
    border: ${props => props.theme.grey_border};
    background: ${props => props.theme.grey_background}
    padding: 20px;
    width: 700px;
    font-size: 1.2rem;
    
    // form {
    //   display: grid;
    //   grid-gap: 30px;
    //   grid-template-columns: 1fr;
    //   grid-template-rows: 1fr 80px;
    // }
    
    & .signup-form__inner {
      display:grid;
      grid-gap: 20px;
      grid-template-columns: 200px 1fr;
    }
    
    fieldset {
        padding 20px;
        border:none;
    }
 
    & label {
        grid-column: 1 / 2;
        justify-self: left;
        align-self: center;
        margin-top: -.4rem;
    }
    
    & input {
        width: 100%;
        height: 40px;
    }
    
    & button {
      grid-column: 2 / 3;
      height: 40px;
      background: ${props => props.theme.green_background};
      border: none;
      outline: none;
      font-size: 16px;
      text-transform: uppercase;
      color: white;
      font-weight: 700;
      transition: background 0.2s ease;
      
      &:hover {
        background: ${props => props.theme.green_background_hover};
        transition: background 0.2s ease;
      }
    }
    
    // & .input-content {
    //     grid-column: 2 / 3;
    // }
    //
 
    //
    // & button {
    //    grid-column: 2 / 3;
    //    width: 100%;
    //    padding: 20px;
    //    font-size: 1.3rem;
    //    text-transform: uppercase;
    // }
    //
    
`;

// TODO focus on hover
// TODO aria-busy usage on submit
// TODO show password btn
export const SignupFormContent = () => {
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <StyledSignupFormContent>
      <Form action={handleSubmit}>
        <fieldset aria-busy={loading} disabled={loading}>
          <div className="signup-form__inner">
            <Input
              label="First Name"
              type="text"
              name="signup_firstName"
              required
            />
            <Input
              label="Last Name"
              type="text"
              name="signup_lastName"
              required
            />
            <Input label="Email" type="email" name="signup_email" required />
            <Input
              label="Password"
              type="password"
              name="signup_password"
              required
            />
            <Input
              label="Confirm Password"
              type="password"
              name="signup_confirm_password"
              required
            />
            <button type="submit" disabled={loading}>
              Sign up
            </button>
          </div>
        </fieldset>
      </Form>
    </StyledSignupFormContent>
  );
};
