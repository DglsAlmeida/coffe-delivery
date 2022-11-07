import { Minus, Plus, Trash } from "phosphor-react";
import emptyCartImg from "../../../public/images/empty-cart.png";
import { CheckoutForm } from "../../components/CheckoutForm";
import constants from "../../constants";
import { useCart } from "../../contexts/CartContext/CartProvider";
import { defaultTheme } from "../../styles/theme";
import { formatCurrency } from "../../utils/formatCurrency";
import * as S from "./styles";

export const Checkout = () => {
  const { CHECKOUT } = constants;
  const { cart, updateCoffeQuantity, removeCoffe } = useCart();
  const deliveryFee = 3.5;

  const increaseQuantity = (id: number) => {
    updateCoffeQuantity(id, 1);
  };

  const decreaseQuantity = (id: number) => {
    updateCoffeQuantity(id, -1);
  };

  const cartItemsWithPrices = cart.map((item) => {
    return {
      ...item,
      totalItens: item.coffe.price * item.quantity,
    };
  });

  const totalPriceOfItems = cartItemsWithPrices.reduce((acc, currentValue) => {
    return (acc += currentValue.totalItens);
  }, 0);

  const totalPrice = totalPriceOfItems + deliveryFee;

  if (cart.length === 0) {
    return (
      <S.EmptyImageContainer>
        <img src={emptyCartImg} alt="Empty Cart Image" />
      </S.EmptyImageContainer>
    );
  }

  return (
    <S.CheckoutContainer>
      <S.Title>{CHECKOUT.title}</S.Title>
      <CheckoutForm />
      <S.Title>{CHECKOUT.paymentCoffesSelected}</S.Title>
      <S.CartContent>
        {cartItemsWithPrices.map((item) => (
          <S.CartItem key={item.coffe.id}>
            <img src={item.coffe.img.src} alt={item.coffe.img.alt} />

            <S.CoffeContainer>
              <S.CartItemTitle>{item.coffe.coffeType}</S.CartItemTitle>
              <S.ButtonsContainer>
                <S.QuantityContainer>
                  <S.Button onClick={() => decreaseQuantity(item.coffe.id)}>
                    <Minus size={14} color={defaultTheme.colors.purpleDark} />
                  </S.Button>
                  <S.Quantity>{item.quantity}</S.Quantity>
                  <S.Button onClick={() => increaseQuantity(item.coffe.id)}>
                    <Plus size={14} color={defaultTheme.colors.purpleDark} />
                  </S.Button>
                </S.QuantityContainer>

                <S.RemoveButton onClick={() => removeCoffe(item.coffe.id)}>
                  <Trash size={18} color={defaultTheme.colors.purpleDark} />
                  REMOVER
                </S.RemoveButton>
              </S.ButtonsContainer>
            </S.CoffeContainer>

            <S.ItemPrice>{formatCurrency(item.totalItens)}</S.ItemPrice>
          </S.CartItem>
        ))}

        <S.Divisor />

        <S.CartValues>
          <span>Total de itens</span>
          <span>{formatCurrency(totalPriceOfItems)}</span>
          <span>Entrega</span>
          <span>{formatCurrency(deliveryFee)}</span>
          <strong>Total</strong>
          <strong>{formatCurrency(totalPrice)}</strong>
        </S.CartValues>

        <S.PaymentButton>CONFIRMAR PEDIDO</S.PaymentButton>
      </S.CartContent>
    </S.CheckoutContainer>
  );
};
