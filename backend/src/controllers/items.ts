import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { search, item } from '../configs/endpoints';
import { ProductItem } from '../../models/ProductItem';
import { SearchResponse } from '../../models/SearchResponse';
import { Price } from '../../models/Price';
import { getSymbolCurrency } from '../utils/common';
import { configs } from '../configs/configs';

const environment: string = process.env.NODE_ENV || 'development';
const environmentConfig = configs[environment];

const getItems = (req: Request, res: Response) => {
  axios.get(search + req.query.q).then((response: AxiosResponse<SearchResponse>) => {
    res.status(200).json({
      items: mapItems(response.data),
      categories: mapCategories(response.data)
    });
  });
};

const getItem = (req: Request, res: Response) => {
  console.log(req.param)
  console.log(req.params)
  axios.get(item + req.param).then((response: AxiosResponse<SearchResponse>) => {
    res.status(200).json({
      items: mapItems(response.data),
      categories: mapCategories(response.data)
    });
  });
};

const mapItems = (response: SearchResponse) => {
  const items: Array<ProductItem> = [];
  for (let i = 0; i < environmentConfig.search_results_count; i++) {
    let item = { ...response.results[i] };
    let currentItem: ProductItem = {
      id: item.id,
      title: item.title,
      price: mapPrice(item.price, item.currency_id),
      picture: '',
      condition: item.condition,
      free_shipping: item.shipping.free_shipping
    };
    items.push(currentItem);
  }
  return items;
};

const mapCategories = (response: SearchResponse) => {
  const categoriesFilter = response.filters.find(filter => filter.id === 'category');
  const categories = categoriesFilter ? categoriesFilter.values[0].path_from_root.map(category => category.name) : [];
  return categories;
};

const mapPrice = (price: number, currencyCode: string): Price => {
  const stringPrice = price.toString();
  const [amount, decimals] = stringPrice.split(environmentConfig.decimal_separator);
  return {
    amount: parseInt(amount, 10),
    decimals: decimals ? parseInt(decimals, 10) : null,
    currency: getSymbolCurrency(currencyCode),
    decimalsSeparator: decimals ? environmentConfig.decimal_separator : null
  };
};

export { getItems };
