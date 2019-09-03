import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-advanced-form';
import faker from 'faker';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import _ from 'lodash';
import Select from 'base/inputs/Select';
import { ContainedInput as Input } from '../../../base/inputs/Input';
import Items from './Items';

const StyledInvoiceForm = styled.div`
   width: 99vw;
   height: 98vh;
   background: ${props => props.theme.offwhite_background};
   border: 1px solid #8D8D8D;
   
   .form-group, .form-control {
        display:grid;
        grid-template-rows: 25px 40px;
        
        label {
          align-self: start;
          color : black;
          margin-bottom: 0px;
          font-weight: 700;
          font-size: 18px;
        }
        
        select, input {
          background: transparent;
          cursor: pointer;
          -webkit-appearance: none;
          -moz-appearance: none;
          text-indent: 1px;
          text-overflow: '';
          border: ${props => props.theme.border_sound};
          color : ${props => props.theme.text_on_white};
          padding-left: 5px;
          font-size: 16px;
        }
        
        option {
          color : ${props => props.theme.text_on_white};
          padding: 5px 17px;
          font-size: 16px;
        }
       
       select:focus { outline:none}
    }
   
   .invoice-inner {
     width: 1400px;
     margin: 0 auto;
     display: grid;
     grid-template-columns: 1fr;
     grid-template-rows: 100px 370px 295px 50px
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
   
   .invoice-details {
      display:grid;
      grid-template-columns: 2fr 0.5fr 0.7fr 0.7fr;
      grid-gap: 20px;
      padding-left: 40px;
      border-bottom: ${props => props.theme.border_dashed_grey};
   }
   
   .invoice-details__bill {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 120px) 120;
      
      .invoice-details__card {
        width: 100%;
        height: 150px;
        background: #ECECEC;
        padding: 0px 50px;
        display: grid;
        grid-template-rows: 40px 25px 25px;
        align-content: center;
        
        p {
          margin-bottom: 5px;
          font-weight: 300;
        }
        
        p:first-child {
          margin-bottom: 15px;
          font-weight: 700;
        }
      }
   }
   
   .invoice-details__details1 { 
      grid-column: 3 / 4; 
      grid-template-rows: 60px repeat(2, 90px);
   }
   
   .invoice-details__details2 { 
      margin-top: 60px;
      grid-template-rows: repeat(3, 90px);
   }
   
   .invoice-details__details1, .invoice-details__details2 {
        display: grid;
        
        label {
          font-size: 14px;
          font-weight: normal;
          color: #5F5F5F;
        }
        
         .input-content input {
          height: 38px;
          width: 230px;
        }
        
        
        .form-group {
            grid-template-rows: 25px 40px;
        }
   }
   
   .ui.icon.input input {
      border-radius: 0;
      width: 230px;
   }
   
   .ui.icon.input {
      margin-top: 7px;
   }
`;

const InvoiceFormContent = () => {
  return (
    <Form>
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
          <div className="invoice-details">
            <div className="invoice-details__bill">
              <Select label="Bill from" name="bill_from">
                <option>{faker.company.companyName()}</option>
                <option>{faker.company.companyName()}</option>
                <option>{faker.company.companyName()}</option>
                <option>{faker.company.companyName()}</option>
              </Select>
              <Select label="Bill to" name="bill_to">
                <option>{faker.company.companyName()}</option>
                <option>{faker.company.companyName()}</option>
                <option>{faker.company.companyName()}</option>
                <option>{faker.company.companyName()}</option>
              </Select>
              <div className="invoice-details__card">
                <p>{faker.company.companyName()}</p>
                <p>
                  {faker.address.country()} {faker.address.city()}
                </p>
                <p>
                  {faker.address.streetName()} {faker.address.streetAddress()}{' '}
                  {faker.address.zipCode()} {faker.phone.phoneNumber()}
                </p>
              </div>
            </div>
            <div className="invoice-details__details1">
              <h2>Invoice details</h2>
              <SemanticDatepicker
                onDateChange={() => {}}
                label="Invoice date"
              />
              <SemanticDatepicker
                onDateChange={() => {}}
                label="Payment due date"
              />
            </div>
            <div className="invoice-details__details2">
              <Select label="Currency" name="currency">
                {_.times(10, () => (
                  <option>{faker.finance.currencyName()}</option>
                ))}
              </Select>
              <Input
                label="Invoice number"
                name="invoice_number"
                defaultValue="IN-000-435"
              />
            </div>
          </div>
          <Items />
        </div>
      </StyledInvoiceForm>
    </Form>
  );
};

export { InvoiceFormContent as default };
