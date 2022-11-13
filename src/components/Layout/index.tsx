import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "../../contexts/CartContext/CartProvider";
import { OrderProvider } from "../../contexts/OrderContext/OrderContextProvider";
import { GlobalStyles } from "../../styles/global";
import { defaultTheme } from "../../styles/theme";
import { Header } from "../Header";
import * as S from "./styles";

export const Layout = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderProvider>
        <CartProvider>
          <S.LayoutContainer>
            <GlobalStyles />
            <Header />
            <Outlet />
          </S.LayoutContainer>
        </CartProvider>
      </OrderProvider>
    </ThemeProvider>
  );
};
