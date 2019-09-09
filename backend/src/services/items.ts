import axios, { AxiosResponse, AxiosError } from 'axios';
import { search, item } from '../configs/endpoints';
import { SearchResponse } from '../../models/SearchResponse';
import { ItemDescriptionResponse } from '../../models/ItemDescriptionResponse';
import { ItemResponse } from '../../models/ItemResponse';

const getItemsRequest = (searchValue: string): Promise<any> => {
  return axios
    .get(search + searchValue)
    .then(async (response: AxiosResponse<SearchResponse>) => {
      return response.data;
    });
};

const getItemRequest = (id: string): Promise<any> => {
  return axios
    .get(item + id)
    .then((response: AxiosResponse<ItemResponse>) => {
      return response.data;
    });
};

const getItemDescriptionRequest = (id: string): Promise<any> => {
  return axios
    .get(`${item}${id}/description`)
    .then((response: AxiosResponse<ItemDescriptionResponse>) => {
      return response.data;
    });
};

export { getItemsRequest, getItemRequest, getItemDescriptionRequest };
