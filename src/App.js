import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import './pages/homepage.styles.scss';

import HomePage from '../src/pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
// eslint-disable-next-line
import Header from './components/header/header.component';

function App() {
  return (
    <div>
     <Header />
     <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
