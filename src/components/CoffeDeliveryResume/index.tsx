import BoxSvg from "../../../public/images/box.svg";
import CartSvg from "../../../public/images/cart.svg";
import CoffeResumeSvg from "../../../public/images/coffe-resume.svg";
import CoffeSvg from "../../../public/images/coffe.svg";
import WatchSvg from "../../../public/images/watch.svg";
import constants from "../../constants";
import { useResponsive } from "../../hooks/useResponsive";
import * as S from "./styles";

export const CoffeDeliveryResume = () => {
  const {
    HOME: { COFFE_DELIVERY_RESUME },
  } = constants;

  const { isMobile } = useResponsive();

  return (
    <S.CoffeDeliveryResumeContainer>
      <S.CoffeDeliveryResumeContent>
        <S.Title>{COFFE_DELIVERY_RESUME.title}</S.Title>

        <S.Description>{COFFE_DELIVERY_RESUME.description}</S.Description>

        <S.CoffeeDeliveryAdvantagesContainer>
          <S.CoffeeDeliveryAdvantage>
            <img src={CartSvg} alt="Coffe Image" />
            <S.CoffeeDeliveryAdvantageText>
              {COFFE_DELIVERY_RESUME.advantagens.cart}
            </S.CoffeeDeliveryAdvantageText>
          </S.CoffeeDeliveryAdvantage>

          <S.CoffeeDeliveryAdvantage>
            <img src={WatchSvg} alt="Watch Image" />
            <S.CoffeeDeliveryAdvantageText>
              {COFFE_DELIVERY_RESUME.advantagens.watch}
            </S.CoffeeDeliveryAdvantageText>
          </S.CoffeeDeliveryAdvantage>

          <S.CoffeeDeliveryAdvantage>
            <img src={BoxSvg} alt="Box Image" />
            <S.CoffeeDeliveryAdvantageText>
              {COFFE_DELIVERY_RESUME.advantagens.box}
            </S.CoffeeDeliveryAdvantageText>
          </S.CoffeeDeliveryAdvantage>

          <S.CoffeeDeliveryAdvantage>
            <img src={CoffeSvg} alt="Coffe Image" />
            <S.CoffeeDeliveryAdvantageText>
              {COFFE_DELIVERY_RESUME.advantagens.coffe}
            </S.CoffeeDeliveryAdvantageText>
          </S.CoffeeDeliveryAdvantage>
        </S.CoffeeDeliveryAdvantagesContainer>
      </S.CoffeDeliveryResumeContent>

      {!isMobile && (
        <S.ImgContainer>
          <img src={CoffeResumeSvg} alt="Coffe Resume Image" />
        </S.ImgContainer>
      )}
    </S.CoffeDeliveryResumeContainer>
  );
};
