import { Response } from "express"
import { AxiosError } from "axios";
import { Error } from "../../models/Error";

export const handleError = (res: Response, error: AxiosError<Error>) => {
  let status = 400;
  if (error.response) {
    status = error.response.data.status;
  } else if (error.code) {
    status = +error.code;
  }
  const message = error.response ? error.response.data.message : error.message
  res.status(status).json({
    message
  });
}