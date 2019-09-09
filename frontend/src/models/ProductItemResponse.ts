import { ProductItem } from "./ProductItem";
import { Author } from "./Author";

export interface ProductItemResponse {
  author: Author;
  item: ProductItem;
}