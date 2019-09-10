export const configs: Data = {
  development: {
    config_id: 'development',
    node_port: 9000,
    author: {
      name: 'Marianela',
      lastname: 'Leoncini'
    },
    search_results_count: 4,
    decimal_separator: '.',
    cache_length: 20
  }
};

interface Data {
  [key: string]: any;
}
