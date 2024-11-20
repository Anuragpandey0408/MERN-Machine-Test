import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage"; // Corrected path
import Dashboard from "./components/Dashboard"; // Corrected path
import CreateEmployee from "./components/CreateEmployee";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-employee" element={<CreateEmployee />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
