import { ProductItem } from "../ProductItem/ProductItemModel";

export interface SearchResults {
  author: Author;
  categories: Array<string>;
  items: Array<ProductItem>
}

export interface Author {
  name: string;
  lastname: string;
}