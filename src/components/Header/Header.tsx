import { FC } from 'react';

import { Button } from '../index';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

import { ReactComponent as Logo } from '../../assets/logo.svg';

interface HeaderProps {
  header?: string;
}

export const Header: FC<HeaderProps> = ({ header }) => {
  return (
    <div className="flex items-center justify-end bg-gray-200 p-6">
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
  );
};
