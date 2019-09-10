import './ProductImage.scss';
import React from 'react';
import { ProductImageProps } from './ProductImageProps';

const ProductImage: React.FC<ProductImageProps> = ({picture, title}) => {
  return (
    <div className="product-image">
      <img className="product-image__picture" src={picture} alt={title} />
    </div>
  );
};

export default ProductImage;
