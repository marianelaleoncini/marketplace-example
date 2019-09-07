import { currencies } from "./currencies";

const getSymbolCurrency = (currencyCode: string): string => {
  if (typeof currencyCode !== 'string') {
    return '';
  }
  currencyCode = currencyCode.toUpperCase();
  const currencySymbol = currencies.get(currencyCode);
  return currencySymbol ? currencySymbol : '';
};

export { getSymbolCurrency };
