import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

const App = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#8a05be" />
        <Routes />
    </>
);

export default App;