import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import Start from './screens/start/start';
import rootReducer from './reducers/reducer';

import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
         <Start />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
