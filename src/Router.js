import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Main from './components/Main';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="main" component={Main} initial />
      </Stack>
    </Router>
  );
};

export default RouterComponent;