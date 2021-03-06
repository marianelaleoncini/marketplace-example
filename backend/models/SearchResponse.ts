export interface SearchResponse {
  results: Array<Result>;
  filters: Array<Filter>;
}

export interface Result {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  condition: string;
  address: {
    state_id: string;
    state_name: string;
    city_id: null;
    city_name: string;
  };
  shipping: {
    free_shipping: false;
  };
  attributes: Array<Attribute>;
}

interface Filter {
  id: string;
  name: string;
  type: string;
  values: Array<FilterValue>;
}

interface FilterValue {
  id: string;
  name: string;
  path_from_root: Array<PathFromRoot>;
}

interface PathFromRoot {
  id: string;
  name: string;
}

interface Attribute {
  name: string;
  value_id: string;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  source: 1;
  id: string;
}
