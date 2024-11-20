import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./LoginPage.css"; // Importing the CSS file

const LoginPage = () => {
    const navigate = useNavigate(); // Initialize navigation function

    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve username and password values
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validate login credentials
        if (username === "admin" && password === "admin123") {
            // Store the username in localStorage
            localStorage.setItem("username", username);

            // Redirect to Dashboard
            navigate("/dashboard");
        } else {
            alert("Invalid login details. Please try again!");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                {/* Logo Section */}
                <div className="logo-container">
                    <img
                        src="/assets/logo.jpeg" // Ensure this path is correct
                        alt="Logo"
                        className="logo"
                    />
                </div>
                <h2 className="login-header">Login Page</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
