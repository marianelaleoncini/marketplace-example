import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { search } from '../config/endpoints';
import { ProductItem } from '../../models/ProductItem';
import { SearchResponse } from '../../models/SearchResponse';

const config = require('../config/configs.json');
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];

const getItems = (req: Request, res: Response) => {
  axios.get(search + req.query.q).then((response: AxiosResponse<SearchResponse>) => {
    res.status(200).json({
      results: mapResults(response.data),
      categories: mapCategories(response.data)
    });
    console.log(res);
  });
};

const mapResults = (response: SearchResponse) => {
  const results: Array<ProductItem> = [];
  for (let i = 0; i < environmentConfig.search_results_count; i++) {
    let result = { ...response.results[i] };
    let currentResult: ProductItem = {
      id: result.id,
      title: result.id,
      price: {
        currency: '',
        amount: 0,
        decimals: 0
      },
      picture: '',
      condition: result.condition,
      free_shipping: result.shipping.free_shipping
    };
    results.push(currentResult);
  }
  return results;
};

const mapCategories = (response: SearchResponse) => {
  const categoriesFilter = response.filters.find(filter => filter.id === 'category');
  const categories = categoriesFilter ? categoriesFilter.values[0].path_from_root.map(category => category.name) : [];
  return categories;
};

export { getItems };
