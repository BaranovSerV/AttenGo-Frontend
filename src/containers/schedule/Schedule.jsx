import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DaySelector from '../components/Schedule/DaySelector';
import LessonList from '../components/Schedule/LessonList';

const Schedule = () => {
    const [schedule, setSchedule] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/schedule/17968', {
                    params: {
                        start_time: '2025-02-01',
                        end_time: '2025-02-20',
                    },
                });
                setSchedule(response.data.schedule_of_group.schedule);
            } catch (error) {
                console.error('Ошибка при загрузке расписания:', error);
            }
        };

        fetchData();
    }, []);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // Фильтруем занятия по выбранной дате
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
