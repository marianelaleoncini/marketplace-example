import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import axios, { AxiosResponse } from 'axios';
import Item from '../ProductItem/ProductItem';
import './ProductResults.scss';

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

const Results: React.FC<RouteComponentProps> = props => {
  useEffect(() => {
    const searchString = queryString.parse(props.location.search).search;
    // todo: change any to SearchResults when middleware is implemented
    axios.get(endpoint + searchString).then((response: AxiosResponse<any>) => {
      console.log(response);
    });
  });
  return (
    <div className="product-results">
      <div className="main-content">
        <Item item={item}></Item>
      </div>
    </div>
  );
};

export default Results;
