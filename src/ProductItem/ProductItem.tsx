import React from 'react';
import { ProductItemProps } from './ProductItemProps';
import './ProductItem.scss';
import ic_shipping from './../assets/images/ic_shipping.png'
import ic_shipping2x from './../assets/images/ic_shipping@2x.png.png'

const ProductItem: React.FC<ProductItemProps> = ({ item, className }) => {
  return (
    <div className={`product-item ${className}`}>
      <img className="product-item__picture" src={item.picture} alt={item.title} />
      <div className="product-item__summary">
        <div className="product-item__price">
          <span>
            {item.price.currency} {item.price.amount}.{item.price.decimals}
          </span>
          <img className="product-item__shipping" src={ic_shipping} srcSet={`${ic_shipping2x} 2x`} alt="Envío gratis" />
        </div>
        <div className="product-item__title">{item.title}</div>
        <div className="product-item__condition">{item.condition}</div>
      </div>
    </div>
  );
};

export default ProductItem;
