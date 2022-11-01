import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import * as S from "./styles";

export const newCycleFormValidationScheme = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no minimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
});

export const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <S.CheckoutContainer>
      <S.Title>Complete seu pedido</S.Title>
      <S.CheckoutForm onSubmit={handleSubmit(onSubmit)}>
        <S.CheckoutUserAddressContent>
          <S.CheckoutHeader>
            <MapPinLine size={24} color="#C47F17" />
            <S.DescriptionContainer>
              <S.FormTitle>Endereço de entrega</S.FormTitle>
              <S.FormSubtitle>
                Informe o endereço onde deseja receber seu pedido
              </S.FormSubtitle>
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
              <S.FormTitle>Pagamento</S.FormTitle>
              <S.FormSubtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </S.FormSubtitle>
            </S.DescriptionContainer>
          </S.CheckoutHeader>
        </S.CheckoutPayment>
      </S.CheckoutForm>
    </S.CheckoutContainer>
  );
};
