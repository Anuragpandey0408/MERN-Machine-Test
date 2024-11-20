import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Dashboard.css"; // Importing CSS file

const Dashboard = () => {
    const navigate = useNavigate(); // Initialize navigation

    // Get the username from localStorage (simulate session)
    const username = localStorage.getItem("username") || "Admin";

    const handleLogout = () => {
        // Clear user session and redirect to Login page
        localStorage.removeItem("username");
        window.location.href = "/";
    };

    return (
        <div className="dashboard-container">
            {/* Top Navigation Bar */}
            <div className="top-navbar">
                <img
                    src="/assets/logo.jpeg" // Ensure the correct path to your logo
                    alt="Logo"
                    className="dashboard-logo"
                />
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <button
                        className="nav-button"
                        onClick={() => navigate("/create-employee")} // Navigate to create-employee page
                    >
                        Employee List
                    </button>
                    <span className="username">{username}</span>
                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                </div>
            </div>

            {/* Side Navigation and Main Panel */}
            <div className="main-dashboard">
                <div className="side-navbar">
                    <span className="side-navbar-header">Dashboard</span>
                    {/* Add other side-nav options if needed */}
                </div>
                <div className="welcome-panel">
                    <h2>Welcome to the Admin Panel</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

