import React from 'react';
import { Router } from 'react-router-dom';

import './App.scss'

import Contents from './layout/Contents';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import history from './history';

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <Header title="Blog Dashboard" />
        <Sidebar />
        <Contents />
        <Footer />
      </Router>
    </div>
  );
}

export default App;