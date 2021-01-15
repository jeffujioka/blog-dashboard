import React from 'react';
import { Router } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css'
import './App.scss'

import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import history from './history';
import Routes from '../Routes';

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <Header title="Blog Dashboard" />
        <Sidebar />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;