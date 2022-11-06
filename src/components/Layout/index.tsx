import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "../../contexts/CartContext/CartProvider";
import { GlobalStyles } from "../../styles/global";
import { defaultTheme } from "../../styles/theme";
import { Header } from "../Header";
import * as S from "./styles";

export const Layout = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <S.LayoutContainer>
          <GlobalStyles />
          <Header />
          <Outlet />
        </S.LayoutContainer>
      </CartProvider>
    </ThemeProvider>
  );
};
