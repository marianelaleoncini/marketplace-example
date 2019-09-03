import { ProductItem } from "./ProductItemModel";
import { Author } from "./AuthorModel";

export interface SearchResults {
  author: Author;
  categories: Array<string>;
  items: Array<ProductItem>
}

