import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/schedule'); // Перебрасывает на /schedule
    };

    return (
        <div className="TestPage">
            <h1>Тестовая страница</h1>
            <button onClick={handleRedirect}>Перейти на расписание</button>
        </div>
    );
};

export default TestPage;
