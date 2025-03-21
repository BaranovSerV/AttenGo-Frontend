import React from 'react';

const AttendanceSelector = ({ lessonId, handleStatusChange }) => {
    return (
        <div className="attendance-selector">
            {['Был', 'Неявка', 'Болен'].map((status) => (
                <button key={status} onClick={() => handleStatusChange(lessonId, status)}>
                    {status}
                </button>
            ))}
        </div>
    );
};

export default AttendanceSelector;
