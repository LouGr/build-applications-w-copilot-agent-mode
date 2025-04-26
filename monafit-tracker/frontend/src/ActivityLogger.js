import React, { useState } from 'react';

const ActivityLogger = () => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ activity, duration, date });
    // Reset form fields
    setActivity('');
    setDuration('');
    setDate('');
  };

  return (
    <div className="container mt-5">
      <h2>Activity Logger</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="activity" className="form-label">Activity Type</label>
          <select 
            id="activity" 
            className="form-select" 
            value={activity} 
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="">Select an activity</option>
            <option value="Running">Running</option>
            <option value="Walking">Walking</option>
            <option value="Strength Training">Strength Training</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration (minutes)</label>
          <input 
            type="number" 
            className="form-control" 
            id="duration" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter duration in minutes"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input 
            type="date" 
            className="form-control" 
            id="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Log Activity</button>
      </form>
    </div>
  );
};

export default ActivityLogger;