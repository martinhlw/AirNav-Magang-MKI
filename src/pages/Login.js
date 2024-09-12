import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo.png'; // Pastikan path ini benar

const Login = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Alihkan ke dashboard langsung tanpa memeriksa input
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-image">
        {/* Gambar latar belakang di sini */}
      </div>
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="AirNav Logo" style={{ maxWidth: '150px', height: 'auto' }} />
        </div>
        <h2>AirNav Indonesia</h2>
        <p>Welcome back! Please sign in to your account.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username (Email)</label>
            <input
              id="username"
              name="username"
              type="email"
              placeholder="username@mail.com"
              value={username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>No account? <a href="/signup">Sign up now</a></p>
      </div>
    </div>
  );
};

export default Login;
