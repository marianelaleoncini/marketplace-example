import React from 'react';
import { ProductItemProps } from './ProductItemProps';
import './ProductItem.scss'

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <div className="product-item">
      <img className="product-item__image" src={item.picture} alt={item.title} />
      <div className="product-item__summary">
        <div className="product-item__price">
          {item.price.currency} {item.price.amount}.{item.price.decimals}
        </div>
        <div className="product-item__title">
          {item.title}
        </div>
        <div className="product-item__condition">
          {item.condition}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
