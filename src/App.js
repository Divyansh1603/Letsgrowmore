import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-avatar-container">
        <img className="user-avatar" src={user.avatar} alt="User Avatar" />
      </div>
      <h2 className="user-name">{user.first_name} {user.last_name}</h2>
      <p className="user-email">{user.email}</p>
    </div>
  );
};

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isUsersVisible, setIsUsersVisible] = useState(false);

  const fetchUsersData = async () => {
    setIsFetching(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsersData(response.data.data);

      // Simulate an extended loader time (e.g., 2 seconds)
      setTimeout(() => {
        setIsUsersVisible(true);
        setIsFetching(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setIsFetching(false);
    }
  };

  const handleGoBack = () => {
    setIsUsersVisible(false);
    setIsFetching(true); // Show the loader when going back

    // Simulate an extended loader time (e.g., 2 seconds)
    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="brand">LGM Users</h1>
        {!isUsersVisible && (
          <button className="btn" onClick={fetchUsersData} disabled={isFetching}>
            {isFetching ? 'Fetching...' : 'Get Users'}
          </button>
        )}
        {isUsersVisible && (
          <button className="btn" onClick={handleGoBack}>
            Go Back
          </button>
        )}
      </nav>
      <div className="user-grid" style={{ display: isUsersVisible ? 'grid' : 'none' }}>
        {usersData.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
