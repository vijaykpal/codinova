import React from 'react';
import Route from './src/Route';
import {Provider} from 'react-redux';
import {store} from './src/redux/ReduxStore';

const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store = {store}>
      <Route />
    </Provider>
    )
};

export default App;