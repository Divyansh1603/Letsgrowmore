import React from 'react';
import UserCard from './UserCard';

const UserGrid = ({ userData }) => {
  return (
    <div className="user-grid">
      {userData.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
