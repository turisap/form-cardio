import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import { ContainedInputField as Input } from 'base/inputs/Input';

const StyledItem = styled.div`
  .item__container {
    display: grid;
    grid-template-columns: 30px 1fr;
    border: ${props => props.theme.grey_border};
    border-top: none;
  }

  .item__number {
    text-align: center;
    height: 100%;
    border-right: ${props => props.theme.grey_border};
  }

  .item-info {
    display: grid;
    grid-template-rows: 50px 0px;
  }

  .item-info.active {
    grid-template-rows: 50px 80px;
  }

  .item-info__collapsed {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    p {
      border-right: ${props => props.theme.grey_border};
      border-bottom: ${props => props.theme.grey_border};
    }

    p:last-child {
      border-right: none;
    }
  }

  .item-info__expanded {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-gap: 30px;
    background: ${props => props.theme.grey_background};
    padding: 0px 30px;
    border-top: ${props => props.theme.grey_border};
    max-height: 0px;
    overflow: hidden;
  }

  .item-info__expanded.active {
    max-height: 80px;
    overflow: hidden;
  }

  .item-info__expanded.active {
  }

  .item__element {
    margin: 0;
    padding: 0;
    text-align: center;
    line-height: 50px;
  }

  .form-control {
    display: grid;
    grid-template-rows: 26px 1fr;
    align-items: space-around;
    grid-gap: 5px;

    label {
      align-self: end;
      color: ${props => props.theme.text_on_grey};
    }

    input {
      background: white;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: '';
      border: ${props => props.theme.border_sound};
      color: ${props => props.theme.text_on_white};
      padding-left: 5px;
      font-size: 16px;
    }
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

  const [active, setActive] = React.useState(false);
  function togglePanel() {
    setActive(!active);
  }

  return (
    <StyledItem>
      <div className="item__container">
        <p className="item__number">{props.number + 1}</p>
        <div className={cn('item-info', { active })} onClick={togglePanel}>
          <div className="item-info__collapsed">
            <p className="item__element">{product}</p>
            <p className="item__element">{unitPrice}</p>
            <p className="item__element">{quantity}</p>
            <p className="item__element">{tax}</p>
            <p className="item__element">{code}</p>
          </div>
          <div className={cn('item-info__expanded', { active })}>
            <Input
              className="item__element"
              value={purchaseOrder}
              label="Purchase Order"
            />
            <Input
              className="item__element"
              value={description}
              label="Description"
            />
            <Input
              className="item__element"
              value={deliveryNumber}
              label="Delivery Number"
            />
          </div>
        </div>
      </div>
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
