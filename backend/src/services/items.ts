import axios, { AxiosResponse, AxiosError } from 'axios';
import { Response } from 'express';
import { search, item } from '../configs/endpoints';
import { SearchResponse } from '../../models/SearchResponse';
import { ItemDescriptionResponse } from '../../models/ItemDescriptionResponse';
import { ItemResponse } from '../../models/ItemResponse';
import { Error } from '../../models/Error';
import { handleError } from '../utils/error';

const getItemsRequest = (searchValue: string, res: Response): Promise<any> => {
  return axios
    .get(search + searchValue)
    .then(async (response: AxiosResponse<SearchResponse>) => {
      return response.data;
    })
   /*  .catch((error: AxiosError<Error>) => {
      handleError(res, error);
    }); */
};

const getItemRequest = (id: string, res: Response): Promise<any> => {
  return axios
    .get(item + id)
    .then((response: AxiosResponse<ItemResponse>) => {
      return response.data;
    });
};

const getItemDescriptionRequest = (id: string, res: Response): Promise<any> => {
  return axios
    .get(`${item}${id}/description`)
    .then((response: AxiosResponse<ItemDescriptionResponse>) => {
      return response.data;
    })
    /* .catch((error: AxiosError<Error>) => {
      handleError(res, error);
    }); */
};

export { getItemsRequest, getItemRequest, getItemDescriptionRequest };
