import {
  BrowserRouter,
  Route,
  Routes as RoutesReactDOM
} from "react-router-dom";
import { Layout } from "../components/Layout";
import { Checkout } from "../pages/Checkout";
import { Home } from "../pages/Home";
import { Success } from "../pages/Success";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesReactDOM>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
        </Route>
      </RoutesReactDOM>
    </BrowserRouter>
  );
};
