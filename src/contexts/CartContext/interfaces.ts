import { ReactNode } from "react";
import { Image } from "../../components/CoffeCard/interfaces";

export interface CardProviderProps {
  children: ReactNode;
}

export type initialStateData = {
  cart: ICartItem[];
};

export type CoffeItem = {
  id: number;
  img: Image;
  price: number;
  coffeType: string;
};

export interface ICartItem {
  coffe: CoffeItem;
  quantity: number;
}

export interface CartContextData {
  cart: ICartItem[];
  addCoffe: (coffe: CoffeItem) => void;
  removeCoffe: (coffeId: number) => void;
  updateCoffeQuantity: (coffeId: number, quantity: number) => void;
}

export enum ActionsType {
  ADD_COFFE = "ADD_COFFE",
  REMOVE_COFFE = "REMOVE_COFFE",
  UPDATE_COFFE_QUANTITY = "UPDATE_COFFE_QUANTITY",
}
