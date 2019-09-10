import { AxiosError } from 'axios';
import { Error } from '../models/Error';
import { toast } from 'react-toastify';

export const showError = (error: AxiosError<Error>) => {
  const message = error.response ? error.response.data.message : error.message;
  toast.error(message);
};
