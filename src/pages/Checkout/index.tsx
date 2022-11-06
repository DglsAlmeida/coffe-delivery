import { Minus, Plus, Trash } from "phosphor-react";
import { CheckoutForm } from "../../components/CheckoutForm";
import constants from "../../constants";
import { defaultTheme } from "../../styles/theme";
import * as S from "./styles";

export const Checkout = () => {
  const { CHECKOUT } = constants;

  return (
    <S.CheckoutContainer>
      <S.Title>{CHECKOUT.title}</S.Title>
      <CheckoutForm />
      <S.Title>{CHECKOUT.paymentCoffesSelected}</S.Title>
      <S.CartContent>
        <S.CartItem>
          <img src="/images/expresso-tradicional.svg" alt="" />

          <S.CoffeContainer>
            <S.CartItemTitle>Expresso Tradicional</S.CartItemTitle>
            <S.ButtonsContainer>
              <S.QuantityContainer>
                <S.Button>
                  <Minus size={14} color={defaultTheme.colors.purpleDark} />
                </S.Button>
                <S.Quantity>0</S.Quantity>
                <S.Button>
                  <Plus size={14} color={defaultTheme.colors.purpleDark} />
                </S.Button>
              </S.QuantityContainer>

              <S.RemoveButton>
                <Trash size={18} color={defaultTheme.colors.purpleDark} />
                REMOVER
              </S.RemoveButton>
            </S.ButtonsContainer>
          </S.CoffeContainer>

          <S.ItemPrice>R$ 9,90</S.ItemPrice>
        </S.CartItem>

        <S.Divisor />

        <S.CartItem>
          <img src="/images/expresso-tradicional.svg" alt="" />

          <S.CoffeContainer>
            <S.CartItemTitle>Expresso Tradicional</S.CartItemTitle>
            <S.ButtonsContainer>
              <S.QuantityContainer>
                <S.Button>
                  <Minus size={14} color={defaultTheme.colors.purpleDark} />
                </S.Button>
                <S.Quantity>0</S.Quantity>
                <S.Button>
                  <Plus size={14} color={defaultTheme.colors.purpleDark} />
                </S.Button>
              </S.QuantityContainer>

              <S.RemoveButton>
                <Trash size={18} color={defaultTheme.colors.purpleDark} />
                REMOVER
              </S.RemoveButton>
            </S.ButtonsContainer>
          </S.CoffeContainer>

          <S.ItemPrice>R$ 9,90</S.ItemPrice>
        </S.CartItem>

        <S.Divisor />

        <S.CartValues>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
          <span>Entrega</span>
          <span>R$ 29,70</span>
          <strong>Total</strong>
          <strong>R$ 29,70</strong>
        </S.CartValues>

        <S.PaymentButton>CONFIRMAR PEDIDO</S.PaymentButton>
      </S.CartContent>
    </S.CheckoutContainer>
  );
};
