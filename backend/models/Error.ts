export interface Error {
  message: string;
  error: string;
  status: number;
  cause: Array<any>;
}
