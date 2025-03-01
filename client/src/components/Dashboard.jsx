import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    // Get the user's name from local storage (or any other authentication mechanism)
    const userName = localStorage.getItem('userName') || 'User';

    // Function to handle logout
    const handleLogout = async () => {
        try {
            // Clear the token from local storage
            localStorage.removeItem('token');
            localStorage.removeItem('userName');

            // Optionally, send a request to the backend to invalidate the token
            await axios.post('http://localhost:5000/api/auth/logout'); // Add this route if needed

            // Redirect to the home page
            window.location.href = '/';
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome to Your Dashboard, {userName}!</h1>
            <p>This is your personalized dashboard.</p>

            {/* Options */}
            <div className="dashboard-options">
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
                <Link to="/" className="home-link">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;