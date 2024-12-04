/* eslint-disable no-undef */
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/Store.js';

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>,
)
