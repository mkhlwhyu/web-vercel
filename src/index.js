import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import Navbar from './NavComponents/navhome/Navbar';
// import { Outlet, createBrowserRouter } from 'react-router-dom';
// import Home from './pages/Home';
// import Contact from './pages/Contactme';
// import Coffee from './pages/Coffee';
// import Programming from './pages/Programming';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

