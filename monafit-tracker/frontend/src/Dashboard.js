import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <p>Welcome to your fitness dashboard! Here you can view your progress, recent activities, and achievements.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Activities</h5>
              <p className="card-text">15</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Points</h5>
              <p className="card-text">1200</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Achievements</h5>
              <p className="card-text">3 Badges Earned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;