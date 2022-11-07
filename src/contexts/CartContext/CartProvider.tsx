import { useContext, useEffect, useReducer } from "react";
import { CartContext } from "./CartContext";
import { ActionsType, CardProviderProps, CoffeItem } from "./interfaces";
import { cartReducer, initialState } from "./reducer/cartReducer";

export const CartProvider = ({ children }: CardProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const storedStateAsJSON = localStorage.getItem(
      "@coffe-delivery:cart-state-1.0.0"
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }
  });

  const addCoffe = (coffe: CoffeItem) => {
    dispatch({ type: ActionsType.ADD_COFFE, payload: coffe });
  };

  const removeCoffe = (coffeId: number) => {
    dispatch({ type: ActionsType.REMOVE_COFFE, payload: coffeId });
  };

  const updateCoffeQuantity = (coffeId: number, quantity: number) => {
    dispatch({
      type: ActionsType.UPDATE_COFFE_QUANTITY,
      payload: {
        id: coffeId,
        quantity,
      },
    });
  };

  useEffect(() => {
    const stateJSON = JSON.stringify(state);

    if (stateJSON) {
      localStorage.setItem("@coffe-delivery:cart-state-1.0.0", stateJSON);
    }
  }, [state]);

  return (
    <CartContext.Provider
      value={{
        cart: state?.cart,
        addCoffe,
        removeCoffe,
        updateCoffeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
