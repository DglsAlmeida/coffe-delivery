import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import Logo from "../../../public/images/logo.svg";
import { useCart } from "../../contexts/CartContext/CartProvider";
import { defaultTheme } from "../../styles/theme";
import * as S from "./styles";

export const Header = () => {
  const { cart } = useCart();

  return (
    <S.HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Coffe Delivery Logo" />
      </Link>
      <S.HeaderContent>
        <S.Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </S.Location>
        <S.HeaderLink to="/checkout">
          <ShoppingCart
            size={22}
            weight="fill"
            color={defaultTheme.colors.yellowDark}
          />
          {cart?.length > 0 && <S.ItemsCount>{cart?.length}</S.ItemsCount>}
        </S.HeaderLink>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
