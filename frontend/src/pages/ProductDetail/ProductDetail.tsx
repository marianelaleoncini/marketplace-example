import './ProductDetail.scss';
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import axios, { AxiosResponse } from 'axios';
import { ProductItem } from '../../models/ProductItem';
import { ProductItemResponse } from '../../models/ProductItemResponse';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { ProductDetailsProps } from './ProductDetailsProps';

const endpoint = 'http://localhost:9000/items/';

const ProductDetail: React.FC<ProductDetailsProps> = ({ match, location }) => {
  const [product, setProduct] = useState<ProductItem>();
  const [categories, setCategories] = useState<Array<string>>([]);

  useEffect(() => {
    setCategories(location.state ? location.state.categories : []);

    const { id } = match.params;
    axios
      .get(endpoint + id)
      .then((response: AxiosResponse<ProductItemResponse>) => {
        setProduct(response.data.item);
      })
      .catch(error => {
        console.log(error);
      });
  }, [match, location]);

  return (
    <main className="main">
      {product && (
        <div>
          <Breadcrumb breadcrumbs={categories} />
          <div className="product-detail container">
            <div className="product-detail__main-info">
              <div className="product-detail__picture-container">
                <img className="product-detail__picture" src={product.picture} alt={product.title} />
              </div>
              <div className="product-detail__summary">
                <div className="product-detail__status">
                  {product.condition} - {product.sold_quantity} vendidos
                </div>
                <div className="product-detail__title">{product.title}</div>
                <div className="product-detail__price">
                  {product.price.currency} {product.price.amount}
                  {product.price.decimalsSeparator}
                  {product.price.decimals}
                </div>
                <Button className="primary">Comprar</Button>
              </div>
            </div>

            <div className="product-detail__description">
              <div className="product-detail__description__title">Descripción del Producto</div>
              <div className="product-detail__description__info">{product.description}</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductDetail;
