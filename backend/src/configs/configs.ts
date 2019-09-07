export const configs: IData = {
  development: {
    config_id: 'development',
    node_port: 9000,
    author: {
      name: 'Marianela',
      lastname: 'Leoncini'
    },
    search_results_count: 4,
    decimal_separator: '.'
  }
};

interface IData {
    [ key: string ]: any;
}