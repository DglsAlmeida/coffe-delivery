import { LayoutProps } from "./interfaces";
import * as S from "./styles";

export const Layout = ({ children }: LayoutProps) => {
  return <S.LayoutContainer>{children}</S.LayoutContainer>;
};
