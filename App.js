import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import Task from '~screens/task';
import { store } from '~store';
LogBox.ignoreAllLogs(true)
const App = () => {
  return (

    <Provider store={store}>
      <Task/>
    </Provider>
  );
};

export default App;
