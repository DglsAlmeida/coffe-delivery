import { PaymentCardProps } from "./interfaces";
import * as S from "./styles";

export const PaymentCard = ({
  paymentType,
  selected,
  handleSelected,
}: PaymentCardProps) => {
  return (
    <S.PaymentCardContainer
      type="button"
      onClick={handleSelected}
      isSelected={selected}
    >
      {paymentType}
    </S.PaymentCardContainer>
  );
};
