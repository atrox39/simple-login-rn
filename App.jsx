import React from 'react';
import { UserProvider } from './src/context/user.context';
import Main from './src/main';

export default function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}
