import React, { useState } from 'react';
import axios from 'axios';
import './styels.css'; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', formData);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.user.name); // Save the user's name
        window.location.href = '/dashboard'; // Redirect to dashboard
    } catch (err) {
        if (err.response && err.response.data) {
            setError(err.response.data.msg || 'Invalid credentials');
        } else {
            setError('Network error');
        }
    }
};

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <a href="/signup">Don't have an account? Sign up</a>
    </div>
  );
};

export default Login;