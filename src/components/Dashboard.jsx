import './Dashboard.scss';

import React from 'react';

import StatCard from './modules/StatCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="page-title">
        <h1>
          <i className="fa fa-home"></i>
          Dashboard
        </h1>
        <h2>Stats</h2>
      </div>
      <hr style={{ color: 'slategray' }} />
      <div className="dashboard-stats">
        <StatCard label="Categories" counter="12" />
        <StatCard label="Articles" counter="56" />
        <StatCard label="Users" counter="1059" />
      </div>
    </div>
  );
}

export default Dashboard;