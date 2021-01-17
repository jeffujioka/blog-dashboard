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
        <StatCard label="Categories" icon="fa fa-folder" color="#ee3322" />
        <StatCard label="Articles" icon="fa fa-file" color="#22aa22" />
        <StatCard label="Users" icon="fa fa-users" color="#1166aa" />
      </div>
    </div>
  );
}

export default Dashboard;