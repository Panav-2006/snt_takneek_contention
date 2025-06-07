import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ setIsLoggedIn, role, setRole }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}:`, username);
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        Takneek
        <hr className="hr" />
      </div>

      <div className="login-form">
        <h2 className="login-title">Login to {role === 'admin' ? 'Admin' : 'User'} Panel</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn" >Login</button>
        </form>

        <div className="user-admin-toggle">
          <span>Login as:</span>
          <a href="#" onClick={() => setRole('user')} className={role === 'user' ? 'active' : ''}>User</a> |
          <a href="#" onClick={() => setRole('admin')} className={role === 'admin' ? 'active' : ''}>Admin</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
