import dolarSvg from "../../../public/images/dolar.svg";
import mapSvg from "../../../public/images/map.svg";
import timeSvg from "../../../public/images/time.svg";
import { useOrder } from "../../contexts/OrderContext/OrderContextProvider";
import * as S from "./styles";

export const Success = () => {
  const { orders } = useOrder();

  return (
    <S.SucessContainer>
      <S.Title>Uhu! Pedido confirmado</S.Title>
      <S.Subtitle>
        Agora é só aguardar que logo o café chegará até você
      </S.Subtitle>

      <S.DeliveryInfos>
        <S.TextContainer>
          <img src={mapSvg} alt="" />
          <span>{orders.address}</span>
        </S.TextContainer>
        <S.TextContainer>
          <img src={timeSvg} alt="" />
          <S.DescriptionContainer>
            <span>Previsão de entrega</span>
            <strong>20 min - 30 min </strong>
          </S.DescriptionContainer>
        </S.TextContainer>
        <S.TextContainer>
          <img src={dolarSvg} alt="" />
          <S.DescriptionContainer>
            <span>Pagamento na entrega</span>
            <strong>{orders.paymentType}</strong>
          </S.DescriptionContainer>
        </S.TextContainer>
      </S.DeliveryInfos>
    </S.SucessContainer>
  );
};
