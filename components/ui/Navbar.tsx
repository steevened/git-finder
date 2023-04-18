import { useEffect, useState } from 'react';
import { Navbar, Button, MobileNav } from '@material-tailwind/react';
import Link from 'next/link';

import ToggleThemeMenu from './ToggleThemeMenu';
import SearchInput from './SearchInput';
import IconMenu from './IconMenu';
import { BackIcon } from './Svgs';
import { useRouter } from 'next/router';

const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="fixed z-50 max-w-screen-xl px-4 py-2 mx-auto mt-5 -translate-x-1/2 border-none left-1/2 lg:px-8 lg:py-4 bg-blue-gray-50/10 dark:bg-blue-gray-900/90 dark:text-gray-100 w-[90%]">
      <div className="container flex items-center justify-between mx-auto ">
        <div className="flex items-center flex-1">
          {router.pathname !== '/' && (
            <div className="">
              <Button
                variant="text"
                onClick={() => router.back()}
                className="rounded-full p-3"
              >
                <BackIcon />
              </Button>
            </div>
          )}
          <Link href="/" className="font-semibold ">
            <Button variant="text" size="md">
              GitHub Finder
            </Button>
          </Link>
        </div>
        <div className="hidden md:block flex-1">
          <SearchInput setOpenNav={setOpenNav} />
        </div>
        <div className="hidden md:block flex-1 text-end">
          <ToggleThemeMenu />
        </div>
        <div className="md:hidden flex-[0.1] text-end">
          <IconMenu openNav={openNav} setOpenNav={setOpenNav} />
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto space-y-5 py-5">
          {/* {navList} */}
          <div className=" w-fit mx-auto">
            <SearchInput setOpenNav={setOpenNav} />
          </div>
          <div className=" w-fit mx-auto">
            <ToggleThemeMenu />
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarComponent;
