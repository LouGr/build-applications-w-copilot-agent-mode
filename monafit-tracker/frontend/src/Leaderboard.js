import React from 'react';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'John Doe', points: 1200 },
    { rank: 2, name: 'Jane Smith', points: 1100 },
    { rank: 3, name: 'Alice Johnson', points: 1050 },
  ];

  return (
    <div className="container mt-5">
      <h2>Leaderboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry) => (
            <tr key={entry.rank}>
              <td>{entry.rank}</td>
              <td>{entry.name}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;