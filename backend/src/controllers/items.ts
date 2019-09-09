import { Request, Response } from 'express';
import { ProductItem } from '../../models/ProductItem';
import { SearchResponse, Result } from '../../models/SearchResponse';
import { Price } from '../../models/Price';
import { getSymbolCurrency } from '../utils/common';
import { configs } from '../configs/configs';
import { getItemRequest, getItemsRequest, getItemDescriptionRequest } from '../services/items';
import { ItemResponse } from '../../models/ItemResponse';
import LRUcache from 'lru-cache';
import { ITEM_CONDITION_ATTRIBUTE, CATEGORY_FILTER } from '../utils/constants';
import { handleError } from '../utils/error';

const environment: string = process.env.NODE_ENV || 'development';
const environmentConfig = configs[environment];
const cacheItems = new LRUcache<string, ProductItem>({ max: environmentConfig.cache_length });

const getItems = async (req: Request, res: Response) => {
  const response = await getItemsRequest(req.query.q, res);
  res.status(200).json({
    items: await mapItems(response, res),
    categories: mapCategories(response)
  });
};

const getItem = async (req: Request, res: Response) => {
  const itemId = req.params.id;
  let item: ProductItem | undefined;
  if (cacheItems.has(itemId)) {
    item = cacheItems.get(itemId);
  } else {
    try {
      const response = await getItemRequest(itemId, res);
      item = await mapItem(response, res);
    } catch (error) {
      handleError(res, error);
    }
  }
  res.status(200).json({
    item
  });
};

const mapItems = async (response: SearchResponse, res: Response): Promise<Array<ProductItem>> => {
  const items: Array<ProductItem> = [];
  for (let i = 0; i < environmentConfig.search_results_count; i++) {
    const item = { ...response.results[i] };
    const itemResponse = await getItemRequest(item.id, res);
    const mappedItem = await mapItem(itemResponse, res);

    cacheItems.set(item.id, mappedItem);

    const currentItem: ProductItem = {
      id: item.id,
      title: item.title,
      price: mapPrice(item.price, item.currency_id),
      picture: getOnePicture(itemResponse),
      condition: mapCondition(item),
      free_shipping: item.shipping.free_shipping,
      location: item.address.state_name
    };

    items.push(currentItem);
  }
  return items;
};

const mapItem = async (response: ItemResponse, res: Response): Promise<ProductItem> => {
  const description = await getItemDescriptionRequest(response.id, res);
  const item: ProductItem = {
    id: response.id,
    title: response.title,
    price: mapPrice(response.price, response.currency_id),
    picture: getOnePicture(response),
    condition: mapCondition(response),
    free_shipping: response.shipping.free_shipping,
    sold_quantity: response.sold_quantity,
    description: description.plain_text
  };
  return item;
};

const getOnePicture = (response: ItemResponse): string => {
  return response.pictures[0].url;
};

const mapCategories = (response: SearchResponse): Array<string> => {
  const categoriesFilter = response.filters.find(filter => filter.id === CATEGORY_FILTER);
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

const mapCondition = (response: Result | ItemResponse): string => {
  const condition = response.attributes.find(attribute => attribute.id === ITEM_CONDITION_ATTRIBUTE);
  return condition ? condition.value_name : '';
}

export { getItems, getItem };
