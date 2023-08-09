import React from 'react';

const Welcome = ({ userName }) => {
  return (
    <div>
      <h2>Welcome</h2>
      <p>Welcome, {userName}!</p>
    </div>
  );
};

export default Welcome;
