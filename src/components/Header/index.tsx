import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../../public/images/logo.svg";
import { defaultTheme } from "../../styles/theme";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={Logo} alt="Coffe Delivery Logo" />
      <S.HeaderContent>
        <S.Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </S.Location>
        <S.HeaderLink href="">
          <ShoppingCart
            size={22}
            weight="fill"
            color={defaultTheme.colors.yellowDark}
          />
        </S.HeaderLink>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
