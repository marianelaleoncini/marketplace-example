import './ProductDescription.scss';
import React from 'react';
import { ProductDescriptionProps } from './ProductDescriptionProps';

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <div className="description">
      <div className="description__title">{'Descripción del Producto'}</div>
      <div className="description__info">{description}</div>
    </div>
  );
};

export default ProductDescription;
