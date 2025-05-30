import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from '/src/Components/DataProvider/DataProvider.jsx';
import {initialState, reducer} from './Utility/reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <DataProvider reducer = {reducer} initialState = {initialState}>
    <App />
  </DataProvider>
  </BrowserRouter>
);
