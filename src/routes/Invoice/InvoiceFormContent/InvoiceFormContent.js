import React from 'react';
import styled from 'styled-components';

const StyledInvoiceForm = styled.div`
   width: 99vw;
   height: 98vh;
   background: ${props => props.theme.offwhite_background};
   border: 1px solid #8D8D8D;
   
   .invoice-inner {
     width: 1400px;
     margin: 0 auto;
     display: grid;
     grid-template-columns: 1fr;
     grid-template-rows: 120px 350px 295px 150px
   }
   
   .invoice-header {
      display: grid;
      align-content: center;
      
      ul {
        border-bottom: ${props => props.theme.grey_border};
        list-style-type: none;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr repeat(2, 50px) 150px;
      }
      
      h2 {
        padding-bottom: 20px;
      }
      
      .invoice-header__btn {
        padding: 5px;
        border: ${props => props.theme.grey_border}
        text-align: center;
        color: ${props => props.theme.text_blue}
        
        &:hover {
            color: ${props => props.theme.text_blue_hover};
            cursor: pointer;
        }
      }
   }
`;

const InvoiceFormContent = props => {
  return (
    <StyledInvoiceForm>
      <div className="invoice-inner">
        <div className="invoice-header">
          <ul>
            <li>
              <h2>Create New Invoice</h2>
            </li>
            <li>
              <p className="invoice-header__btn">D</p>
            </li>
            <li>
              <p className="invoice-header__btn">P</p>
            </li>
            <li>
              <p className="invoice-header__btn">Save Draft</p>
            </li>
          </ul>
        </div>
      </div>
    </StyledInvoiceForm>
  );
};

export { InvoiceFormContent as default };
