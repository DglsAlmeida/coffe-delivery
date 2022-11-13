import { ReactNode } from "react";

export interface OrderProvideProps {
  children: ReactNode;
}

export type Order = {
  address: string;
  paymentType: string;
};

export interface OrderContextData {
  orders: Order;
  addOrder: (order: Order) => void;
}
