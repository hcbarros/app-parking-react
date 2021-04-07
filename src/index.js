import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import Start from './screens/start/start';
import Menu from './screens/menu/menu';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Start} />
            <Route path="/menu" component={Menu} />
        </Switch>  
     </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
