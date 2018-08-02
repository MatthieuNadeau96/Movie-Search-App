import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Details from './components/Details';

ReactDOM.render(
  <BrowserRouter>
      <App>
        <Route path="/details" component={Details}/>
      </App>
  </BrowserRouter>
  , document.getElementById('root')
  );
registerServiceWorker();
