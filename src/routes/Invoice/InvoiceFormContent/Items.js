import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import _ from 'lodash';
import styled from 'styled-components';
import Item from './Item';

const StyledItems = styled.div`
  display:grid;
  height: 300px;
  overflow-y: scroll;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  padding-left: 40px;
  margin-top: 30px;
  
  .items__table-head, .items__table-content {
    border: ${props => props.theme.grey_border}
    background: ${props => props.theme.grey_background}
  }
  
  .items__table-head {
    display:grid;
    grid-template-columns:30px repeat(5, 1fr);
    p {
      margin: 0;
      padding: 0;
      text-align: center;
      line-height: 50px;
      border-right: ${props => props.theme.grey_border}
    }
   
   p:last-child {
      border-right: none;
   } 
  }
`;

const Items = props => {
  return (
    <StyledItems>
      <div className="items__table-head">
        <p className="items__table-header">#</p>
        <p className="items__table-header">ITEM TYPE</p>
        <p className="items__table-header">UNIT PRICE</p>
        <p className="items__table-header">QUANTITY</p>
        <p className="items__table-header">TAX</p>
        <p className="items__table-header">CODE</p>
      </div>
      {props.items.map((item, i) => (
        <Item key={item.id} item={item} number={i} />
      ))}
    </StyledItems>
  );
};

Items.defaultProps = {
  items: getRandomItems(3)
};

Items.propTypes = {};

function getRandomItems(number) {
  return _.times(number, () => ({
    id: faker.random.uuid(),
    product: getRandomProducts(1),
    unitPrice: `$${faker.commerce.price()}`,
    quantity: faker.finance.amount(),
    tax: `${Math.ceil(Math.random() * 15) + 10}%`,
    purchaseOrder: `PO-${faker.random.uuid().substring(0, 7)}`,
    description: 'Standard labor per hour)',
    code: `ENE-${faker.random.uuid().substring(0, 5)}`,
    deliveryNumber: `ENE-${faker.random.number()}`
  }));
}

function getRandomProducts(number) {
  return _.times(number, () => faker.commerce.productName());
}

export { Items as default };
