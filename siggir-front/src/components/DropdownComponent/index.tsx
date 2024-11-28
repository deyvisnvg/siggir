import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ReactNode } from 'react';
import { Size, PositionDropdown } from '@/types/core';
import { Link } from 'react-router-dom';

interface Item {
  href?: string;
  label: string;
  icon?: ReactNode;
  onclick?: () => void;
}

interface Props {
  iconButtonDropdown: ReactNode;
  items: Item[];
  positionDropdown?: PositionDropdown;
  size?: Size;
}

export default function DropdownComponent({
  iconButtonDropdown,
  items,
  positionDropdown,
}: Props) {
  return (
    <Menu>
      <MenuButton className="">
        {iconButtonDropdown}
      </MenuButton>

      <MenuItems
        transition
        anchor={positionDropdown}
        className="w-auto z-10
        shadow-2xl shadow-gray-600 
        origin-top-right 
        rounded-xl 
        border border-white/5 
        bg-gray-800 p-2 text-sm/6 
        text-white transition 
        duration-100 ease-out 
        [--anchor-gap:var(--spacing-1)] 
        focus:outline-none 
        data-[closed]:scale-95 
        data-[closed]:opacity-0"
      >
        {
          items && items.map((item) => (
            item.href ? (
              <Link to={item.href} key={item.label}>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    {item.icon}
                    {item.label}
                  </button>
                </MenuItem>
              </Link>
            ) : (
              <MenuItem key={item.label}>
                <button
                  className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                  onClick={item.onclick}
                >
                  {item.icon}
                  {item.label}
                </button>
              </MenuItem>
            )
          ))
        }
      </MenuItems>
    </Menu>
  )
}