import { useAuth0 } from '@auth0/auth0-react';

export const Cart: React.FC = () => {
  const { user } = useAuth0();

  return (
    <>
      <h1>Hey, its working!</h1>

      {JSON.stringify(user)}
    </>
  );
};
