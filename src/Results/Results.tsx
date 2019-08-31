import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import axios, { AxiosResponse } from 'axios';

// todo: implement node middleware
const endpoint = 'https://api.mercadolibre.com/sites/MLA/search?q=';

const Results: React.FC<RouteComponentProps> = props => {
  useEffect(() => {
    const searchString = queryString.parse(props.location.search).search;
    // todo: change any to SearchResults when middleware is implemented
    axios.get(endpoint + searchString).then((response: AxiosResponse<any>) => {
      console.log(response)
    })
  })
  return <>hola</>;
};

export default Results;
