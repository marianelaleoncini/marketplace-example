import { Item } from "./Item";

export interface SearchResults {
  author: Author;
  categories: Array<string>;
  items: Array<Item>
}

export interface Author {
  name: string;
  lastname: string;
}