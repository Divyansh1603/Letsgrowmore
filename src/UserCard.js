import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-avatar-container">
        <img src={user.avatar} alt={user.first_name} className="user-avatar" />
      </div>
      <h3 className="user-name">{`${user.first_name} ${user.last_name}`}</h3>
      <p className="user-email">{user.email}</p>
    </div>
  );
};

export default UserCard;
