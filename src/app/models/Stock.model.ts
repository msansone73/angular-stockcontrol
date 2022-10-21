import { StockType } from "./StockType.model";

export interface Stock {
  id?: number;
  name: string;
  ticker: string;
  stockType: string;
}
