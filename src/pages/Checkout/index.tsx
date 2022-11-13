import emptyCartImg from "../../../public/images/empty-cart.png";
import { CheckoutForm } from "../../components/CheckoutForm";
import { useCart } from "../../contexts/CartContext/CartProvider";
import * as S from "./styles";

export const Checkout = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <S.EmptyImageContainer>
        <img src={emptyCartImg} alt="Empty Cart Image" />
      </S.EmptyImageContainer>
    );
  }

  return (
    <S.CheckoutContainer>
      <CheckoutForm />
    </S.CheckoutContainer>
  );
};
