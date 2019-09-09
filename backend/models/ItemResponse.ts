export interface ItemResponse {
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
  pictures: Array<Picture>;
  attributes: Array<Attribute>;
}

interface Picture {
  id: string,
  url: string,
  secure_url: string,
  size: string,
  max_size: string,
  quality: string
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
