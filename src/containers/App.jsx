import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Schedule from './schedule/Schedule';
import Auth from './auth/Auth';
import AuthCallback from './auth/AuthCallback';
import '../assets/styles/Schedule.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/callback" element={<AuthCallback />} />
            </Routes>
        </Router>
    );
}

export default App
