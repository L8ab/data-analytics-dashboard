import React, { useState, useEffect } from 'react';
import AnalyticsChart from './AnalyticsChart';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/analytics')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="dashboard">
      <h1>Analytics Dashboard</h1>
      <AnalyticsChart data={data} />
    </div>
  );
};

export default Dashboard;
