import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyDollar, MapPinLine, Minus, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";
import constants from "../../constants";
import { useCart } from "../../contexts/CartContext/CartProvider";
import { useOrder } from "../../contexts/OrderContext/OrderContextProvider";
import { defaultTheme } from "../../styles/theme";
import { formatCurrency } from "../../utils/formatCurrency";
import { PaymentCard } from "../PaymentCard";
import * as S from "./styles";

export const checkoutFormValidationScheme = zod.object({
  cep: zod.number().min(8),
  street: zod.string(),
  houseNumber: zod.number(),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
});

export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutFormValidationScheme),
  });

  const { cart, updateCoffeQuantity, removeCoffe } = useCart();
  const { addOrder } = useOrder();
  const navigate = useNavigate();

  const { CHECKOUT } = constants;
  const deliveryFee = 3.5;

  const [paymentsTypes, setPaymentsTypes] = useState([
    { name: "CARTÃO DE CRÉDITO", selected: false },
    { name: "CARTÃO DE DEBITO", selected: false },
    { name: "DINHEIRO", selected: false },
  ]);

  const [paymentTypeSelected, setPaymentTypeSelected] = useState("");

  const changeToSelected = (index: number) => {
    const newState = [...paymentsTypes];

    if (newState[index].selected) {
      newState[index].selected = false;
      setPaymentTypeSelected("");
      return;
    } else {
      newState[index].selected = true;
    }

    newState.forEach((item) => {
      if (item.name !== newState[index].name && item.selected) {
        item.selected = false;
      }
    });

    setPaymentTypeSelected(newState[index].name);
    setPaymentsTypes(newState);
  };

  const onSubmit = (data: any) => {
    if (paymentTypeSelected) {
      addOrder({
        address: `${data.street}, ${data.houseNumber} ${data.complement} ${data.city}`,
        paymentType: paymentTypeSelected,
      });
      reset();
      navigate("/success", { replace: true });
    }
  };

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

  return (
    <S.CheckoutForm onSubmit={handleSubmit(onSubmit)}>
      <S.AddressContent>
        <S.Title>{CHECKOUT.title}</S.Title>
        <S.CheckoutUserAddressContent>
          <S.CheckoutHeader>
            <MapPinLine size={24} color="#C47F17" />
            <S.DescriptionContainer>
              <S.FormTitle>{CHECKOUT.formTitle}</S.FormTitle>
              <S.FormSubtitle>{CHECKOUT.formSubtitle}</S.FormSubtitle>
            </S.DescriptionContainer>
          </S.CheckoutHeader>

          <S.Input
            type="text"
            placeholder="CEP"
            {...register("cep", { valueAsNumber: true })}
            error={!!errors?.cep}
          />
          <S.Input
            type="text"
            placeholder="RUA"
            {...register("street")}
            error={!!errors?.street}
          />
          <S.Input
            type="text"
            placeholder="Número"
            {...register("houseNumber", { valueAsNumber: true })}
            error={!!errors?.number}
          />
          <S.Input
            type="text"
            placeholder="Complemento"
            {...register("complement")}
            error={!!errors?.complement}
          />
          <S.Input
            type="text"
            placeholder="Bairro"
            {...register("neighborhood")}
            error={!!errors?.neighborhood}
          />
          <S.Input
            type="text"
            placeholder="Cidade"
            {...register("city")}
            error={!!errors?.city}
          />
        </S.CheckoutUserAddressContent>

        <S.CheckoutPayment>
          <S.CheckoutHeader>
            <CurrencyDollar size={24} color="#8047F8" />
            <S.DescriptionContainer>
              <S.FormTitle>{CHECKOUT.paymentCardTitle}</S.FormTitle>
              <S.FormSubtitle>{CHECKOUT.paymentCardSubtitle}</S.FormSubtitle>
            </S.DescriptionContainer>
          </S.CheckoutHeader>

          {paymentsTypes.map((field, index) => (
            <PaymentCard
              key={field.name}
              paymentType={field.name}
              selected={field.selected}
              handleSelected={() => changeToSelected(index)}
            />
          ))}
        </S.CheckoutPayment>
      </S.AddressContent>

      <S.Cart>
        <S.Title>{CHECKOUT.paymentCoffesSelected}</S.Title>
        <S.CartContent>
          {cartItemsWithPrices.map((item) => (
            <>
              <S.CartItem key={item.coffe.id}>
                <img src={item.coffe.img.src} alt={item.coffe.img.alt} />

                <S.CoffeContainer>
                  <S.CartItemTitle>{item.coffe.coffeType}</S.CartItemTitle>
                  <S.ButtonsContainer>
                    <S.QuantityContainer>
                      <S.Button onClick={() => decreaseQuantity(item.coffe.id)}>
                        <Minus
                          size={14}
                          color={defaultTheme.colors.purpleDark}
                        />
                      </S.Button>
                      <S.Quantity>{item.quantity}</S.Quantity>
                      <S.Button onClick={() => increaseQuantity(item.coffe.id)}>
                        <Plus
                          size={14}
                          color={defaultTheme.colors.purpleDark}
                        />
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

              <S.Divisor />
            </>
          ))}

          <S.CartValues>
            <span>Total de itens</span>
            <span>{formatCurrency(totalPriceOfItems)}</span>
            <span>Entrega</span>
            <span>{formatCurrency(deliveryFee)}</span>
            <strong>Total</strong>
            <strong>{formatCurrency(totalPrice)}</strong>
          </S.CartValues>

          <S.PaymentButton type="submit">CONFIRMAR PEDIDO</S.PaymentButton>
        </S.CartContent>
      </S.Cart>
    </S.CheckoutForm>
  );
};
