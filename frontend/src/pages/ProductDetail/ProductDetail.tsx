import './ProductDetail.scss';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { ProductItem } from '../../models/ProductItem';
import { ProductItemResponse } from '../../models/ProductItemResponse';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { ProductDetailsProps } from './ProductDetailsProps';
import Spinner from '../../components/Spinner/Spinner';
import ProductImage from '../../components/ProductImage/ProductImage';
import ProductSummary from '../../components/ProductSummary/ProductSummary';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import { toast } from 'react-toastify';

const endpoint = 'http://localhost:9000/items/';

const ProductDetail: React.FC<ProductDetailsProps> = ({ match, location }) => {
  const [product, setProduct] = useState<ProductItem>();
  const [categories, setCategories] = useState<Array<string>>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setCategories(location.state ? location.state.categories : []);

    const { id } = match.params;
    axios
      .get(endpoint + id)
      .then((response: AxiosResponse<ProductItemResponse>) => {
        setProduct(response.data.item);
      })
      .catch(err => {
        setError(true);
        toast.error(err.message);
      });
  }, [match, location]);

  if (!product && !error) {
    return <Spinner />;
  } else if (error) {
    return <div>Error</div>;
  }

  return (
    <main className="main">
      {product && (
        <div>
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
        </div>
      )}
    </main>
  );
};

export default ProductDetail;
