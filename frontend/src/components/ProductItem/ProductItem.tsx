import './ProductItem.scss';
import ic_shipping from '../../assets/images/ic_shipping.png';
import ic_shipping2x from '../../assets/images/ic_shipping@2x.png.png';
import React from 'react';
import { ProductItemProps } from './ProductItemProps';

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <div className="product-item">
      <div className="product-item__picture-container">
        <img className="product-item__picture" src={item.picture} alt={item.title} />
      </div>
      <div className="product-item__summary">
        <div className="product-item__header">
          <div className="product-item__header__price">
            <span>
              {item.price.currency} {item.price.amount}
              {item.price.decimalsSeparator}
              {item.price.decimals}
            </span>
            {item.free_shipping && (
              <img
                className="product-item__header__shipping"
                src={ic_shipping}
                srcSet={`${ic_shipping2x} 2x`}
                alt="Envío gratis"
              />
            )}
          </div>
          <div className="product-item__header__location">{item.location}</div>
        </div>
        <div className="product-item__title">{item.title}</div>
      </div>
    </div>
  );
};

export default ProductItem;
