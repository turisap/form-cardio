import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import _ from 'lodash';

const Items = props => {
  console.log(props.items);
  return '';
};

Items.defaultProps = {
  items: getRandomItems(3)
};

Items.propTypes = {};

// TODO fix all warnings
function getRandomItems(number) {
  return _.times(number, () => ({
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
