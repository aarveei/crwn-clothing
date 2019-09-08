import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import './pages/homepage.styles.scss';

import HomePage from '../src/pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
// eslint-disable-next-line
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
