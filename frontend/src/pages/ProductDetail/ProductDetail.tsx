import './ProductDetail.scss';
import { configs } from '../../configs';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import { ProductDetailsProps } from './ProductDetailsProps';
import { showError } from '../../helpers/showError';
import { ProductItem } from '../../models/ProductItem';
import { ProductItemResponse } from '../../models/ProductItemResponse';
import { Error } from '../../models/Error';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Spinner from '../../components/Spinner/Spinner';
import ProductImage from '../../components/ProductImage/ProductImage';
import ProductSummary from '../../components/ProductSummary/ProductSummary';
import ProductDescription from '../../components/ProductDescription/ProductDescription';

const { apiUrl } = configs[process.env.NODE_ENV];

const ProductDetail: React.FC<ProductDetailsProps> = ({ match, location }) => {
  const [product, setProduct] = useState<ProductItem>();
  const [categories, setCategories] = useState<Array<string>>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setCategories(location.state ? location.state.categories : []);

    const { id } = match.params;
    axios
      .get(`${apiUrl}/items/${id}`)
      .then((response: AxiosResponse<ProductItemResponse>) => {
        setProduct(response.data.item);
      })
      .catch((error: AxiosError<Error>) => {
        setError(true);
        showError(error);
      });
  }, [match, location]);

  if (!product && !error) {
    return <Spinner />;
  } else if (error) {
    return <Link to="/" />;
  }

  return (
    <>
      {product && (
        <main className="main">
          <Breadcrumb breadcrumbs={categories} />
          <div className="product-detail container">
            <div className="product-detail__main-info">
              <ProductImage title={product.title} picture={product.picture} />
              <ProductSummary
                condition={product.condition}
                soldQuantity={product.sold_quantity}
                title={product.title}
                price={product.price}
              />
            </div>
            <ProductDescription description={product.description} />
          </div>
        </main>
      )}
    </>
  );
};

export default ProductDetail;
