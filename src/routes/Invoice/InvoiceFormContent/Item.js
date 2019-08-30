import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background: ${props => props.theme.grey_background} p {
    margin: 0;
    padding: 0;
    text-align: center;
    line-height: 50px;
    border-right: ${props => props.theme.grey_border};
    border-bottom: ${props => props.theme.grey_border};
  }

  p:last-child {
    border-right: none;
  }
`;

const Item = props => {
  const {
    product,
    unitPrice,
    quantity,
    tax,
    purchaseOrder,
    description,
    code,
    deliveryNumber
  } = props.item;
  return (
    <StyledItem>
      <p className="item__element">{product}</p>
      <p className="item__element">{unitPrice}</p>
      <p className="item__element">{quantity}</p>
      <p className="item__element">{tax}</p>
      <p className="item__element">{purchaseOrder}</p>
      <p className="item__element">{description}</p>
      <p className="item__element">{code}</p>
      <p className="item__element">{deliveryNumber}</p>
    </StyledItem>
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

export { Item as default };
