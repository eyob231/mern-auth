import React, { useState } from 'react';
import axios from 'axios';
import './styels.css'; // Import the CSS file

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/auth/register', formData);
        alert('Registration successful! Please log in.');
        window.location.href = '/login';
    } catch (err) {
        if (err.response && err.response.data) {
            setError(err.response.data.msg || 'Error registering user');
        } else {
            setError('Network error');
        }
    }
};
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={onChange}
          required
        />
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
        <button type="submit">Sign Up</button>
      </form>
      <a href="/login">Already have an account? Log in</a>
    </div>
  );
};

export default Signup;