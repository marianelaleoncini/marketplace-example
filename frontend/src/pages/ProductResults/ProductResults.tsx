import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import queryString from 'query-string';
import axios, { AxiosResponse } from 'axios';
import './ProductResults.scss';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductItem from '../../components/ProductItem/ProductItem';
import { SearchResults } from '../../models/ProductResults';
import { ProductItem as ProductItemModel } from '../../models/ProductItem';

// todo: implement node middleware
const endpoint = 'http://localhost:9000/items?q=';

const ProductResults: React.FC<RouteComponentProps> = ({ location }) => {
  const [items, setItems] = useState<Array<ProductItemModel>>([]);
  const [categories, setCategories] = useState<Array<string>>([]);

  useEffect(() => {
    const { search: searchString } = queryString.parse(location.search);
    axios.get(endpoint + searchString).then((response: AxiosResponse<SearchResults>) => {
      setItems(response.data.items);
      setCategories(response.data.categories);
    });
  }, [location.search]);

  return (
    <main className="main">
      <div>
        <Breadcrumb breadcrumbs={categories}/>
        <div className="product-results container">
          {items.map(item => (
            <Link className="product-results__item" to={`items/${item.id}`} key={item.id}>
              <ProductItem item={item} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductResults;
