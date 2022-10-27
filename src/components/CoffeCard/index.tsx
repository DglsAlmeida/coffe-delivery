import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/theme";
import { formatCurrency } from "../../utils/formatCurrency";
import { CoffeCardProps } from "./interfaces";
import * as S from "./styles";

export const CoffeCard = ({
  img,
  title,
  description,
  coffeType,
  price,
}: CoffeCardProps) => {
  return (
    <S.CoffeCardContainer>
      <img src={img.src} alt={img.alt} />
      <S.CoffeType>{coffeType}</S.CoffeType>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <S.ButtonsContainer>
        <S.Price>{formatCurrency(price)}</S.Price>
        <S.QuantityContainer>
          <S.Button>
            <Minus size={14} color={defaultTheme.colors.purpleDark} />
          </S.Button>
          <S.Quantity>0</S.Quantity>
          <S.Button>
            <Plus size={14} color={defaultTheme.colors.purpleDark} />
          </S.Button>
        </S.QuantityContainer>
        <S.CartButton>
          <ShoppingCart
            size={20}
            weight="fill"
            color={defaultTheme.colors.grayLight}
          />
        </S.CartButton>
      </S.ButtonsContainer>
    </S.CoffeCardContainer>
  );
};
