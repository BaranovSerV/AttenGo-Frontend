import React, { useState, useEffect } from 'react';
import { fetchSchedule } from '../../api/Schedule';
import DaySelector from '../components/Schedule/DaySelector';
import LessonList from '../components/Schedule/LessonList';
import { useNavigate } from 'react-router-dom';

const Schedule = () => {
    const [schedule, setSchedule] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching schedule...');
                const response = await fetchSchedule('2025-02-01', '2025-02-20');

                console.log('Response:', response);

                if (response && response.status === 401) {
                    navigate('/auth');
                } else {
                    console.log('Schedule data:', response.data);
                    setSchedule(response.data.schedule_of_group.schedule);
                }
            } catch (error) {
                console.error('Ошибка при загрузке расписания:', error);

                if (error.response && error.response.status === 401) {
                    navigate('/auth');
                }
            }
        };

        fetchData();
    }, [navigate]);

    const handleDateChange = (date) => {
        console.log('Selected date:', date);
        setSelectedDate(date);
    };

    const filteredLessons = schedule
        .filter((day) => day.date === selectedDate)
        .flatMap((day) => day.lessons);

    return (
        <div className="App">
            <h1>Расписание занятий</h1>
            <DaySelector schedule={schedule} onDateChange={handleDateChange} />
            <LessonList lessons={filteredLessons} selectedDate={selectedDate} />
        </div>
    );
};

export default Schedule;
