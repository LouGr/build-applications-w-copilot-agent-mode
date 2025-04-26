import React from 'react';
import UserRegistration from './UserRegistration';
import ActivityLogger from './ActivityLogger';
import Leaderboard from './Leaderboard';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <UserRegistration />
      <ActivityLogger />
      <Leaderboard />
      <Dashboard />
    </div>
  );
}

export default App;
