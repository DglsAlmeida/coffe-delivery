import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import constants from "../../constants";
import { PaymentCard } from "../PaymentCard";
import * as S from "./styles";

export const newCycleFormValidationScheme = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no minimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});

export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const { CHECKOUT } = constants;

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
    console.log(data);
    reset();
  };

  return (
    <S.CheckoutForm onSubmit={handleSubmit(onSubmit)}>
      <S.CheckoutUserAddressContent>
        <S.CheckoutHeader>
          <MapPinLine size={24} color="#C47F17" />
          <S.DescriptionContainer>
            <S.FormTitle>{CHECKOUT.formTitle}</S.FormTitle>
            <S.FormSubtitle>{CHECKOUT.formSubtitle}</S.FormSubtitle>
          </S.DescriptionContainer>
        </S.CheckoutHeader>

        <S.Input type="text" placeholder="CEP" {...register("cep")} />
        <S.Input type="text" placeholder="RUA" {...register("street")} />
        <S.Input type="text" placeholder="Número" {...register("number")} />
        <S.Input
          type="text"
          placeholder="Complemento"
          {...register("complement")}
        />
        <S.Input
          type="text"
          placeholder="Bairro"
          {...register("neighborhood")}
        />
        <S.Input type="text" placeholder="Cidade" {...register("city")} />
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
    </S.CheckoutForm>
  );
};
