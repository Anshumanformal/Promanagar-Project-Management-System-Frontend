/* eslint-disable no-undef */
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
