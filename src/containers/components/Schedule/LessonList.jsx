// src/components/Schedule/LessonList.js

import React, { useState } from 'react';
import classNames from 'classnames';
import { submitAttendance } from '../../../api/Schedule'
import AttendanceSelector from './AttendanceSelector';

const LessonList = ({ lessons, selectedDate }) => {
    const [attendanceStatus, setAttendanceStatus] = useState(new Map());
    const [selectedLesson, setSelectedLesson] = useState(null);

    const handleStatusChange = (lessonId, status) => {
        setAttendanceStatus(new Map(attendanceStatus.set(lessonId, status)));
    };

    const handleLessonClick = (lessonId) => {
        setSelectedLesson((prev) => (prev === lessonId ? null : lessonId));
    };

    const handleSubmitAttendance = async () => {
        const attendanceData = Array.from(attendanceStatus.entries()).reduce((acc, [lessonId, status]) => {
            const lesson = lessons.find((lesson) => lesson.pair_number === lessonId);
            if (lesson) {
                acc[lesson.discipline] = status;  // Assuming discipline is the subject name
            }
            return acc;
        }, {});

        try {
            const response = await submitAttendance(selectedDate, attendanceData);  // Используем импортированную функцию
            console.log('Attendance successfully submitted:', response);
        } catch (error) {
            console.error('Error submitting attendance:', error);
        }
    };

    if (!lessons?.length) {
        return <p className="no-lessons">Нет занятий на выбранный день.</p>;
    }

    return (
        <div>
            <h2 className="title">Ближайшие события</h2>
            <p className="subtitle">Сегодняшние пары</p>
            {lessons.map((lesson) => {
                const isSelected = selectedLesson === lesson.pair_number;
                const status = attendanceStatus.get(lesson.pair_number) || '';

                return (
                    <div
                        key={lesson.pair_number}
                        className={classNames('lesson-item', status)}
                        onClick={() => handleLessonClick(lesson.pair_number)}
                        aria-selected={isSelected}
                    >
                        <div className="lesson-header">
                            <span className="pair-number">{lesson.pair_number}</span>
                            <span className={`type-marker type-${lesson.kindOfWork.toLowerCase().replace(/\s+/g, '-')}`} />
                            <span>{lesson.kindOfWork}</span>
                        </div>
                        <div className="discipline">{lesson.discipline}</div>
                        <div className="time">Время: {lesson.beginLesson} - {lesson.endLesson}</div>
                        <div className="auditorium">Аудитория: {lesson.auditorium}, {lesson.building}</div>
                        {lesson.lecturer && <div className="lecturer">Преподаватель: {lesson.lecturer}</div>}

                        {isSelected && <AttendanceSelector lessonId={lesson.pair_number} handleStatusChange={handleStatusChange} />}
                    </div>
                );
            })}

            <button className="submit-button" onClick={handleSubmitAttendance}>
                Отправить посещаемость
            </button>
        </div>
    );
};

export default LessonList;
