import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import theme from '@material-tailwind/react/theme';
import {
  SystemOut,
  SunIconOut,
  MoonIconOut,
  SystemIcon,
  SunIcon,
  MoonIcon,
} from './Svgs';
import { useTheme } from 'next-themes';

const ToggleThemeMenu = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Menu>
      <MenuHandler>
        <Button variant="text" size="sm">
          {theme === 'system' ? (
            <SystemOut />
          ) : theme === 'light' ? (
            <SunIconOut />
          ) : (
            <MoonIconOut />
          )}
        </Button>
      </MenuHandler>
      <MenuList className="p-1 border-none shadow-lg min-w-fit dark:bg-blue-gray-800 shadow-black/30">
        <MenuItem className="p-0 focus:bg-transparent">
          <Button
            variant={theme === 'system' ? 'gradient' : 'text'}
            size="sm"
            className="flex items-center gap-1 text-center w-28 "
            onClick={() => setTheme('system')}
          >
            {theme === 'system' ? <SystemOut /> : <SystemIcon />}
            System
          </Button>
        </MenuItem>
        <MenuItem className="p-0 focus:bg-transparent">
          <Button
            variant={theme === 'light' ? 'gradient' : 'text'}
            size="sm"
            className="flex items-center gap-1 text-center w-28"
            onClick={() => setTheme('light')}
          >
            {theme === 'light' ? <SunIconOut /> : <SunIcon />}
            Light
          </Button>
        </MenuItem>
        <MenuItem className="p-0 focus:bg-transparent">
          <Button
            variant={theme === 'dark' ? 'gradient' : 'text'}
            size="sm"
            className="flex items-center gap-1 text-center w-28"
            onClick={() => setTheme('dark')}
          >
            {theme === 'dark' ? <MoonIconOut /> : <MoonIcon />}
            Dark
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ToggleThemeMenu;
