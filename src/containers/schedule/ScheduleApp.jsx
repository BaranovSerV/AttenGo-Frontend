import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Schedule from './Schedule';
import '../../assets/styles/Schedule.css';

function ScheduleApp() {
    return (
        <Router>
            <Routes>
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </Router>
    );
}

export default ScheduleApp
