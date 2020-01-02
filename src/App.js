import React from 'react';
import { useSelector } from 'react-redux';

import createNavigator from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createNavigator(signed);

  return (
    <Routes />
  );
}
