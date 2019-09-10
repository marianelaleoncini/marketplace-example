export const configs: Data = {
  development: {
    apiUrl: 'http://localhost:9000'
  }
};

interface Data {
  [key: string]: any;
}
