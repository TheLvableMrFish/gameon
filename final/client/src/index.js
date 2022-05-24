import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop';
import SignUp from './pages/SignUp'
import GamePage from './pages/GamePage'
import Account from './pages/Account';

let userId = parseInt(localStorage.getItem('userId')) || 0

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/shop/:id' element={<GamePage />} ></Route>
        <Route path='/account' element={userId != 0 ? <Account /> : <Home />}></Route>
        <Route path='*' element={
          <main style={{padding: '1rem'}}>
            <h1>404 Page is not found!</h1>
          </main>
        }></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
