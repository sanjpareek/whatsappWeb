import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store'

const target = document.getElementById('root');
ReactDOM.render(
   <Provider store={store}>
     <div>
       <App />
     </div>
  </Provider>,
  target);
registerServiceWorker();
