import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import Entrada from './screens/start/entrada';
import Menu from './screens/menu/menu';
import reducer from './components/reducer';

import reportWebVitals from './reportWebVitals';

const store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
         <Entrada />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
