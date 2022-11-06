import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useRef } from "react";
import { useCart } from "../../contexts/CartContext/CartProvider";
import { defaultTheme } from "../../styles/theme";
import { formatCurrency } from "../../utils/formatCurrency";
import { CoffeCardProps } from "./interfaces";
import * as S from "./styles";

export const CoffeCard = ({
  img,
  id,
  title,
  description,
  coffeType,
  price,
}: CoffeCardProps) => {
  const { cart, addCoffe, updateCoffeQuantity } = useCart();
  const quantityRef = useRef(0);

  console.log("cart", cart);

  const increaseQuantity = () => {
    addCoffe({
      id,
      coffeType: title,
      img: {
        ...img,
      },
      price,
    });
    quantityRef.current++;
  };

  const descreaseQuantity = () => {
    if (quantityRef.current > 0) {
      updateCoffeQuantity(id, -1);
      quantityRef.current--;
    }
  };

  return (
    <S.CoffeCardContainer>
      <img src={img.src} alt={img.alt} />
      <S.CoffeType>{coffeType}</S.CoffeType>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <S.ButtonsContainer>
        <S.Price>{formatCurrency(price)}</S.Price>
        <S.QuantityContainer>
          <S.Button onClick={descreaseQuantity}>
            <Minus size={14} color={defaultTheme.colors.purpleDark} />
          </S.Button>
          <S.Quantity>{quantityRef.current}</S.Quantity>
          <S.Button onClick={increaseQuantity}>
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
