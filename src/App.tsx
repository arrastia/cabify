import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'Global.styles';

import { routes } from 'configuration/routes';

import { Layout } from 'ui/components/Layout';

import { ShoppingCart } from 'ui/pages/ShoppingCart';

export function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path={routes.SHOPPING_CART}>
            <Route element={<ShoppingCart />} index={true} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
