import { FC } from 'react';

import { Button } from '../index';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

import { ReactComponent as Logo } from '../../assets/logo.svg';

interface HeaderProps {
  header?: string;
}

export const Header: FC<HeaderProps> = ({ header }) => {
  return (
    <div className="bg-gray-200">
      <div className="flex items-center justify-between p-6">
        <Button icon={<MagnifyingGlassIcon className="h-6 w-6" />} />
        <Logo className="-translate-y-0/2 absolute left-1/2 mx-auto -translate-x-1/2 transform" />
        <div className="inline-flex gap-6">
          <Button
            icon={<ShoppingBagIcon className="h-6 w-6" />}
            className="gap-6"
          >
            Cart
          </Button>
          <Button icon={<UserIcon className="h-6 w-6" />}>Login</Button>
        </div>
      </div>

      <hr className="mx-6  bg-gray-400" />

      <div className="flex justify-between p-8">
        <Button>Jewelry & Accessories</Button>
        <Button>Clothing & Shoes</Button>
        <Button>Home & Living</Button>
        <Button>Wedding & Party </Button>
        <Button>Toys & Entertainment</Button>
        <Button>Art & Collectibles </Button>
        <Button> Craft Supplies & Tools</Button>
      </div>
    </div>
  );
};
