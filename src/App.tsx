import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return !isAuthenticated ? (
    <button onClick={() => loginWithRedirect()}>Login</button>
  ) : (
    <>
      <button onClick={() => logout()}>Log out</button>
      {JSON.stringify(user)}
    </>
  );
}

export default App;
