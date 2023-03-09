import { useAuth0 } from '@auth0/auth0-react';
import { useCartStore } from '../../hooks';

export const Cart: React.FC = () => {
  const { user } = useAuth0();
  const cartData = useCartStore((state) => state.cartData);

  console.log(cartData);

  return (
    <>
      <h1>Hey, its working!</h1>

      {JSON.stringify(user)}
    </>
  );
};
