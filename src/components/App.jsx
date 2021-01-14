import React from 'react';
import { Router } from 'react-router-dom';

import './App.scss'

import Contents from './Contents';
import Footer from './Footer';
import Menu from './Menu';
import history from './history';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <Menu />
        <Sidebar />
        <Contents />
        <Footer />
      </Router>
    </div>
  );
}

export default App;