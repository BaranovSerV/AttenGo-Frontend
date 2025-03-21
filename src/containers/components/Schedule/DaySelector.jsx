import React from 'react';

const DaySelector = ({ schedule, onDateChange }) => {
    const uniqueDates = [...new Set(schedule.map((day) => day.date))];

    return (
        <div>
            <label htmlFor="date-select" style={{ color: '#e0e0e0' }}>
                Выберите день:
            </label>
            <select
                id="date-select"
                onChange={(e) => onDateChange(e.target.value)}
                style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #444',
                    borderRadius: '5px',
                    backgroundColor: '#222',
                    color: 'white',
                    fontSize: '16px',
                }}
            >
                <option value="">-- Выберите дату --</option>
                {uniqueDates.map((date) => (
                    <option key={date} value={date}>
                        {date}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DaySelector;