import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/reduxStore'
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = (state) => root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App
          dispatch={store.dispatch.bind(store)}
          state={state}
        />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

rerenderEntireTree(store.getState())

store.subscribe(() => {
  rerenderEntireTree(store.getState())
})

reportWebVitals();
