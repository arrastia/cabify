import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyles } from 'Global.styles';

import { routes } from 'configuration/routes';

import { Layout } from 'ui/_components/Layout';

import { ShoppingCart } from 'ui/ShoppingCart';

export function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path={routes.SHOPPING_CART}>
            <Route element={<ShoppingCart />} index={true} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
