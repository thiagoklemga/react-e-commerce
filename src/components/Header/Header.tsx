import { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../index';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

import { ReactComponent as Logo } from '../../assets/logo.svg';

export const Header: FC = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="flex items-center justify-end bg-gray-200 p-6">
      <Logo
        className="-translate-y-0/2 absolute left-1/2 mx-auto -translate-x-1/2 transform"
        onClick={() => {
          navigate('/');
        }}
      />
      <div className="inline-flex gap-6">
        {isAuthenticated ? (
          <>
            <Button
              icon={<ShoppingBagIcon className="h-6 w-6" />}
              onClick={() => {
                navigate('/cart');
              }}
            >
              Cart
            </Button>
            <Button
              icon={<UserIcon className="h-6 w-6" />}
              onClick={() => logout()}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              icon={<UserIcon className="h-6 w-6" />}
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
