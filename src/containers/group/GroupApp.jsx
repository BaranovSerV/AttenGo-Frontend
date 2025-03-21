import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GroupPage from './Group';

function GroupApp() {
    return (
        <Router>
            <Routes>
                <Route path="/group" element={<GroupPage />} />
            </Routes>
        </Router>
    );
}

export default GroupApp
