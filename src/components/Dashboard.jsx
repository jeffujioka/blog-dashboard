import './Dashboard.scss';

import React, { useState, useEffect } from 'react';

import PageTitle from './modules/PageTitle';
import StatCard from './modules/StatCard';
import axios from '../apis/stats';

const defaultStats = {
  articles: 0,
  categories: 0,
  users: 0
};

const Dashboard = () => {
  const [stats, setStats] = useState(defaultStats);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/stats');
        const { articles, categories, users } = response.data;

        setStats({
          articles, categories, users
        });
      } catch (error) {
        // TODO handle it
        console.log(`Unhandled error: ${error}`);
        setStats(defaultStats);
      }
    })();

  }, []);

  return (
    <div className="dashboard">
      <PageTitle icon="fa fa-home" title="Dashboard" subtitle="Stats" />
      <div className="dashboard-stats">
        <StatCard
          label="Categories"
          icon="fa fa-folder"
          color="#ee3322"
          value={stats.categories}  
        />
        <StatCard
          label="Articles"
          icon="fa fa-file"
          color="#22aa22"
          value={stats.articles}
        />
        <StatCard
          label="Users"
          icon="fa fa-users"
          color="#1166aa"
          value={stats.users}
        />
      </div>
    </div>
  );
}

export default Dashboard;