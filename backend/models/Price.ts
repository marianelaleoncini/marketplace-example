export interface Price {
  currency: string;
  amount: number;
  decimals: number | null;
  decimalsSeparator: string;
}
