import * as React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

import CloseIcon from 'img/times-solid.svg';

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
    }
    .contactus-form__content, .contactus-form__footer {
        background: ${props => props.theme.offwhite_background}
     }
     
     .contactus-form__footer {
        border-top: ${props => props.theme.border_sound}
     }
`;

const ContactUsFormContent = props => {
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
        Progress
      </div>
      <div className="contactus-form__content">Content</div>
      <div className="contactus-form__footer">Footer</div>
    </StyledContactForm>
  );
};

ContactUsFormContent.propTypes = {
  closeHandler: Proptypes.func.isRequired
};

export { ContactUsFormContent as default };
