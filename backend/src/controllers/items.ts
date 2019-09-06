import { Request, Response, NextFunction, response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { search } from '../config/endpoints';

exports.getItems = (req: Request, res: Response) => {
  axios.get(search + '?q=' + req.query.q).then((response: AxiosResponse) => {

    res.status(200).json({
      results: response.data.results
    });
  });
};
