import { useContext, useState } from "react";
import { Order, OrderProvideProps } from "./interfaces";
import { OrderContext } from "./OrderContext";

export const OrderProvider = ({ children }: OrderProvideProps) => {
  const [orders, setOrders] = useState<Order>({} as Order);

  const addOrder = (order: Order) => {
    setOrders(order);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
