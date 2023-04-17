import { useEffect, useState } from 'react';
import {
  Typography,
  Navbar,
  Button,
  IconButton,
  MobileNav,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
} from '@material-tailwind/react';
import Link from 'next/link';
import {
  MoonIcon,
  MoonIconOut,
  SearchIcon,
  SunIcon,
  SunIconOut,
  SystemIcon,
  SystemOut,
} from './Svgs';
import ToggleThemeMenu from './ToggleThemeMenu';
import SearchInput from './SearchInput';
import IconMenu from './IconMenu';

const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // const navList = (
  //   <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <a href="#" className="flex items-center">
  //         Pages
  //       </a>
  //     </Typography>
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <a href="#" className="flex items-center">
  //         Account
  //       </a>
  //     </Typography>
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <a href="#" className="flex items-center">
  //         Blocks
  //       </a>
  //     </Typography>
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <a href="#" className="flex items-center">
  //         Docs
  //       </a>
  //     </Typography>
  //   </ul>
  // );

  return (
    <Navbar className="fixed max-w-screen-xl px-4 py-2 mx-auto mt-5 -translate-x-1/2 border-none left-1/2 lg:px-8 lg:py-4 dark:bg-blue-gray-900/90 darktext-gray-100">
      <div className="container flex items-center justify-between mx-auto ">
        <div className="">
          <Link href="/" className="font-semibold ">
            <Button variant="text" size="md">
              GitHub Finder
            </Button>
          </Link>
        </div>
        <div className="hidden md:block">
          <SearchInput />
        </div>
        <div className="hidden lg:block">
          <ToggleThemeMenu />
        </div>
        <div className="lg:hidden">
          <IconMenu openNav={openNav} setOpenNav={setOpenNav} />
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {/* {navList} */}
          <Button variant="gradient" size="sm" className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarComponent;
