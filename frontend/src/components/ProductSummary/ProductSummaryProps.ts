import { Price } from "../../models/Price";

export interface ProductSummaryProps {
    condition: string;
    soldQuantity: number | undefined;
    title: string;
    price: Price;
}