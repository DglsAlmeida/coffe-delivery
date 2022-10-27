import { ThemeProvider } from "styled-components";
import { CoffeDeliveryResume } from "./components/CoffeDeliveryResume";
import { CoffesList } from "./components/CoffesList";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <GlobalStyles />
        <Header />
        <CoffeDeliveryResume />
        <CoffesList />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
