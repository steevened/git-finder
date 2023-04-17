import { FC, PropsWithChildren } from 'react';

import NavbarComponent from './Navbar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <main className="container max-w-screen-xl px-5 pt-32 mx-auto">
        {children}
      </main>
    </>
  );
};

export default Layout;
