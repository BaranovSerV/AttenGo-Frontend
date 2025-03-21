import axios from 'axios';
import { BASE_BACKEND_URL } from '../../config';


const fetchSchedule = async (startTime, endTime, groupId) => {
    try {
        const response = await axios.get(`${BASE_BACKEND_URL}/schedule/${groupId}`, {
            params: {
                start_time: startTime,
                end_time: endTime,
            },
        });
        return response.data.schedule_of_group.schedule;
    } catch (error) {
        console.error('Ошибка при загрузке расписания:', error);
        throw error;
    }
};

export { fetchSchedule };

const submitAttendance = async (date, attendanceData) => {
    try {
        const response = await axios.post(
            `${BASE_BACKEND_URL}/attendance/`,
            {
                date,
                attendance_data: attendanceData
            },
            {
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error submitting attendance:', error);
        throw error;
    }
};

export { submitAttendance };
