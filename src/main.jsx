import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import './index.css';
import Main from './components/Main';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
)
