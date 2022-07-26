import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

import { Styles } from './Layout.styles';

export const Layout = () => {
  return (
    <Styles.Layout>
      <Header />
      <div>
        <Outlet />
      </div>
    </Styles.Layout>
  );
};
