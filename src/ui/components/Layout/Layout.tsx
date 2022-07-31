import { Outlet } from 'react-router-dom';

import { Styles } from './Layout.styles';

import { Header } from 'ui/components/Header';
import { Sidebar } from 'ui/components/Sidebar';

export const Layout = () => {
  return (
    <Styles.Layout>
      <Header />
      <Styles.Main>
        <Outlet />
        <Sidebar />
      </Styles.Main>
    </Styles.Layout>
  );
};
