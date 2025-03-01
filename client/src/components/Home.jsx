import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Our App</h1>
            <p>Get started by logging in or signing up!</p>

            {/* Navigation Links */}
            <div className="home-links">
                <Link to="/login" className="home-link">Login</Link>
                <Link to="/signup" className="home-link">Sign Up</Link>
            </div>
        </div>
    );
};

export default Home;