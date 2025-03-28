import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import AuthCallback from './AuthCallback';
import TestPage from './Test';

function AuthApp() {
    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/callback" element={<AuthCallback />} />
                <Route path="/test" element={<TestPage />} />
            </Routes>
        </Router>
    );
}

export default AuthApp
