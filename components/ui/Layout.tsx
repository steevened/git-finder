import { FC, PropsWithChildren } from 'react';

import NavbarComponent from './Navbar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
    </>
  );
};

export default Layout;
