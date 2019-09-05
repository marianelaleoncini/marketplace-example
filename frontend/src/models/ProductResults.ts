import { ProductItem } from "./ProductItem";
import { Author } from "./Author";

export interface SearchResults {
  author: Author;
  categories: Array<string>;
  items: Array<ProductItem>
}

