import { IconButton } from '@material-tailwind/react';
import { FC } from 'react';

interface Props {
  openNav: boolean;
  setOpenNav: (openNav: boolean) => void;
}

const IconMenu: FC<Props> = ({ openNav, setOpenNav }) => {
  return (
    <IconButton
      variant="text"
      className="w-6 h-6 p-4 ml-auto text-inherit focus lg:hidden"
      ripple={false}
      onClick={() => setOpenNav(!openNav)}
    >
      {openNav ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </IconButton>
  );
};

export default IconMenu;
