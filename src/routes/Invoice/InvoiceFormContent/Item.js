import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

const Item = props => {
  return (
    <>
      <p>{props.item.product}</p>
    </>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.string.isRequired,
    unitPrice: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    tax: PropTypes.string.isRequired,
    purchaseOrder: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired
  })
};
