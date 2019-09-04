import React, { useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import queryString from 'query-string';
import axios, { AxiosResponse } from 'axios';
import './ProductResults.scss';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductItem from '../../components/ProductItem/ProductItem';

const item = {
  id: '123',
  title: 'Ipod',
  price: {
    currency: 'ARS',
    amount: 120,
    decimals: 30
  },
  picture: 'http://mla-s1-p.mlstatic.com/948813-MLA31003000773_062019-I.jpg',
  condition: 'Nuevo',
  free_shipping: true
};

// todo: implement node middleware
const endpoint = 'https://api.mercadolibre.com/sites/MLA/search?q=';

const ProductResults: React.FC<RouteComponentProps> = ({ location }) => {
  useEffect(() => {
    const searchString = queryString.parse(location.search).search;
    // todo: change any to SearchResults when middleware is implemented
    axios.get(endpoint + searchString).then((response: AxiosResponse<any>) => {
      console.log(response);
    });
  });
  return (
    <main className="main">
      <div>
        <Breadcrumb></Breadcrumb>
        <div className="product-results container">
          <Link className="product-results__item" to={`items/${item.id}`}>
            <ProductItem item={item}></ProductItem>
          </Link>
          <Link className="product-results__item" to={`items/${item.id}`}>
            <ProductItem item={item}></ProductItem>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProductResults;
