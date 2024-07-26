import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import './index.css';
import DessertsMenu from './components/DessertsMenu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <DessertsMenu />
  </React.StrictMode>,
)
