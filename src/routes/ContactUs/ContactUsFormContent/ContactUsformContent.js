import * as React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import Steps from './Steps';

const StyledContactForm = styled.div`
    width: 600px;
    height: 800px;
    display: grid;
    grid-template-rows: 120px calc(100% - 260px) 140px;
    position: relative
    
    svg {
        padding: 5px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 1px;
        color: #ffffff;
        z-index: 16
        width: 30px;
        height: 30px;
    }
    
    .contactus-form__steps {
        background: ${props => props.theme.orange_background}
        display: grid; 
        justify-content: center;
        align-content: start;
        color: ${props => props.theme.text_on_red};
    }
    
    .contactus-form__steps--inner {
        width: 390px;
        height: 90px;
        display: grid;
        grid-template-columns: repeat(3, 130px);
    }
    
    .contactus-form__step {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 30px;
        justify-content: center;
        justify-items: center;
        align-items: center;
        
        border-bottom: ${props => props.theme.border_offwhite};
        
        p {
            margin: 0;
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
            justify-items: center;
            align-items: center;
            font-weight: 500;
            color: rgba(255,255,255,0.7);
            text-transform: uppercase;
        }
        
        p.contactus-form__stepnumber {
            align-self: end;
            width: 35px;
            height: 35px
            border: ${props => props.theme.border_sound_step_circle};
            border-radius: 50%;
            color: inherit;
            font-size: 30px;
            font-weight: 700;
            background: ${props => props.theme.offwhite_background}
        }
        
        &.checked {
            border-bottom: ${props => props.theme.border_sound_active_step};
            
            p.contactus-form__stepnumber {
                color: ${props => props.theme.text_orange};
                border: 1px solid ${props => props.theme.text_orange};
            }
        }
    }
   
    
    
    .contactus-form__content, .contactus-form__footer {
        background: ${props => props.theme.offwhite_background}
     }
     
     .contactus-form__footer {
        border-top: ${props => props.theme.border_sound}
     }
`;

const ContactUsFormContent = props => {
  const [step, setStep] = React.useState(1);

  return (
    <StyledContactForm>
      <div className="contactus-form__steps">
        <svg
          onClick={props.closeHandler}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          className="svg-inline--fa fa-times fa-w-11"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ></path>
        </svg>
        <div className="contactus-form__steps--inner">
          <div className={cn('contactus-form__step', { checked: step >= 1 })}>
            <p className="contactus-form__stepnumber">1</p>
            <p className="contactus-form__steptext">Think</p>
          </div>
          <div className={cn('contactus-form__step', { checked: step >= 2 })}>
            <p className="contactus-form__stepnumber">2</p>
            <p className="contactus-form__steptext">Check</p>
          </div>
          <div className={cn('contactus-form__step', { checked: step >= 3 })}>
            <p className="contactus-form__stepnumber">3</p>
            <p className="contactus-form__steptext">Submit</p>
          </div>
        </div>
      </div>
      <div className="contactus-form__content">
        <Steps step={1} />
      </div>
      <div className="contactus-form__footer">Footer</div>
    </StyledContactForm>
  );
};

ContactUsFormContent.propTypes = {
  closeHandler: Proptypes.func.isRequired
};

export { ContactUsFormContent as default };
