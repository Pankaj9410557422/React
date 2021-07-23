import React from 'react';
import Ball from './Components/Ball';
import Bat from './Components/Bat';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      <Ball/>
      {/* <Bat/> */}
    </div>
    </Provider>
  );
}

export default App;
