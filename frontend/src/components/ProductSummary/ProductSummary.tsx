import React from 'react';
import './ProductSummary.scss';
import { ProductSummaryProps } from './ProductSummaryProps';
import Button from '../Button/Button';

const ProductSummary: React.FC<ProductSummaryProps> = ({ condition, soldQuantity, title, price }) => {
  return (
    <div className="summary">
      <div className="summary__status">{`${condition} - ${soldQuantity} vendidos`}</div>
      <div className="summary__title">{title}</div>
      <div className="summary__price">
        {price.currency} {price.amount}
        {price.decimalsSeparator}
        {price.decimals}
      </div>
      <Button className="primary">{'Comprar'}</Button>
    </div>
  );
};

export default ProductSummary;
