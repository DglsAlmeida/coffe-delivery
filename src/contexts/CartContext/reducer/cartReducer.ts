import { ActionsType, initialStateData } from "../interfaces";

export const initialState: initialStateData = {
  cart: [],
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionsType.ADD_COFFE: {
      const coffeIndex = state.cart.findIndex((item) => {
        return item?.coffe?.id === action.payload?.id;
      });

      if (coffeIndex !== -1) {
        const newState = { ...state };
        newState.cart[coffeIndex].quantity++;
        return { ...newState };
      }

      return {
        cart: [
          ...state.cart,
          {
            coffe: { ...action.payload },
            quantity: 1,
          },
        ],
      };
    }

    case ActionsType.REMOVE_COFFE: {
      return {
        cart: state.cart.filter((item) => item.coffe.id !== action.payload),
      };
    }

    case ActionsType.UPDATE_COFFE_QUANTITY: {
      const coffeIndex = state.cart.findIndex(
        (item) => item.coffe.id === action.payload.id
      );

      if (coffeIndex !== -1) {
        const newState = { ...state };

        if (
          action.payload.quantity === -1 &&
          newState.cart[coffeIndex].quantity === 0
        ) {
          return state;
        } else {
          newState.cart[coffeIndex].quantity += action.payload.quantity;
          return { ...newState };
        }
      }

      return state;
    }

    default:
      return state;
  }
};
