import { useAuth0 } from '@auth0/auth0-react';

export const Login: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <h1>Hey, its working!</h1>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <>
          <button onClick={() => logout()}>Log out</button>
          {JSON.stringify(user)}
        </>
      )}
    </>
  );
};