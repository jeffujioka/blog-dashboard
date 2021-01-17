import './Dashboard.scss';

import React from 'react';

import PageTitle from './modules/PageTitle';
import StatCard from './modules/StatCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <PageTitle icon="fa fa-home" title="Dashboard" subtitle="Stats" />
      <div className="dashboard-stats">
        <StatCard label="Categories" icon="fa fa-folder" color="#ee3322" />
        <StatCard label="Articles" icon="fa fa-file" color="#22aa22" />
        <StatCard label="Users" icon="fa fa-users" color="#1166aa" />
      </div>
    </div>
  );
}

export default Dashboard;