import './ProductResults.scss';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import queryString from 'query-string';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { configs } from '../../configs';
import { showError } from '../../helpers/showError';
import { SearchResults } from '../../models/ProductResults';
import { ProductItem as ProductItemModel } from '../../models/ProductItem';
import { Error } from '../../models/Error';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductItem from '../../components/ProductItem/ProductItem';
import Spinner from '../../components/Spinner/Spinner';

const { apiUrl } = configs[process.env.NODE_ENV];

const ProductResults: React.FC<RouteComponentProps> = ({ location }) => {
  const [items, setItems] = useState<Array<ProductItemModel>>([]);
  const [categories, setCategories] = useState<Array<string>>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const { search: searchString } = queryString.parse(location.search);
    axios
      .get(`${apiUrl}/items?q=${searchString}`)
      .then((response: AxiosResponse<SearchResults>) => {
        setItems(response.data.items);
        setCategories(response.data.categories);
      })
      .catch((error: AxiosError<Error>) => {
        setError(true);
        showError(error);
      });
  }, [location]);

  if (!items.length && !error) {
    return <Spinner />;
  } else if (error) {
    return <Link to="/" />;
  }
  return (
    <main className="main">
      <div>
        <Breadcrumb breadcrumbs={categories} />
        <div className="product-results container">
          {items.map(item => (
            <Link
              className="product-results__item"
              to={{
                pathname: `items/${item.id}`,
                state: {
                  categories: categories
                }
              }}
              key={item.id}
            >
              <ProductItem item={item} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductResults;
