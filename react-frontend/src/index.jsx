import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import App from './App';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,
  </SnackbarProvider>,
);
